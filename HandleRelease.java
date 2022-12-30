package com.example.finalproject;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class HandleRelease {

  public List<Release> totalRelease(String rawData, List<Commit> commits) throws ParseException {
    List<Release> releases = new ArrayList<>();
    JSONArray ja = JSON.parseArray(rawData);
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    for (int i = 0; i < ja.size(); i++) {
      JSONObject jo = JSON.parseObject(ja.getString(i));
      String author = JSON.parseObject(jo.getString("author")).getString("login");
      String message = jo.getString("body");
      String date = jo.getString("published_at").split("T")[0];
      String name = jo.getString("tag_name");
      int commitNum = 0;
      Release r1 = new Release(author, message, date, name, commitNum);
      releases.add(r1);
    }
    List<Release> releases1 = new ArrayList<>();
    for (int i = releases.size() - 1; i >= 0; i--) {
      releases1.add(releases.get(i));
    }
    for (Release r1: releases1) {
      while (commits.size() != 0){
        Commit c1 = commits.get(0);
        if (dateFormat.parse(c1.getDate()).getTime() < dateFormat.parse(r1.getDate()).getTime()){
          r1.setCommitNum(r1.getCommitNum() + 1);
          commits.remove(c1);
        } else {
          break;
        }
      }
    }












    return releases1;
  }

}

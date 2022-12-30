package com.example.finalproject;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import java.util.ArrayList;
import java.util.List;

public class HandleIssue {
  public List<Issue> handleAllIssue(String rawData) {

    JSONArray ja = JSON.parseArray(rawData);
    List<Issue> issues = new ArrayList<>();

    for (int i = 0; i < ja.size(); i++) {
      JSONObject jo = JSON.parseObject(ja.getString(i));
      String state = jo.getString("state");
      String url = jo.getString("url");
      String title = jo.getString("title");
      String update_date = jo.getString("updated_at").split("T")[0];
      String update_time = jo.getString("updated_at").split("T")[1].split("Z")[0];
      Issue i1 = new Issue(state, url, title, update_date, update_time);
      issues.add(i1);

    }

    return issues;

  }

  public List<Issue> handleClosedIssue(List<Issue> issues) {
    List<Issue> closed = new ArrayList<>();
    for (Issue i1: issues) {
      if (i1.getState().equals("closed")) {
        closed.add(i1);
      }
    }
    return closed;
  }

  public List<Issue> handleOpenIssue(List<Issue> issues) {
    List<Issue> open = new ArrayList<>();
    for (Issue i1: issues) {
      if (!i1.getState().equals("closed")) {
        open.add(i1);
      }
    }
    return open;
  }


}

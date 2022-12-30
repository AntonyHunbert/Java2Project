package com.example.finalproject;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HandleCommit {
  public List<Commit> handleAllCommit(String rawData) {
    JSONArray ja = JSON.parseArray(rawData);
    List<Commit> commits = new ArrayList<>();

    for (int i = 0; i < ja.size(); i++) {
      JSONObject jo = JSON.parseObject(ja.getString(i));
      String author = JSON.parseObject(JSON.parseObject(jo.getString("commit")).getString("author")).getString("name");
      String date = JSON.parseObject(JSON.parseObject(jo.getString("commit")).getString("author")).getString("date").split("T")[0];
      String message = JSON.parseObject(jo.getString("commit")).getString("message");
      Commit c1 = new Commit(author, date, message);
      commits.add(c1);

    }

    return commits;
  }

  public  List<Developer> handleDevelopers(List<Commit> commits) {
    List<Developer> developers = new ArrayList<>();
    Map<String, Integer> dev1 = new HashMap<>();
    for (Commit c1: commits) {
      if (!dev1.containsKey(c1.getAuthor())) {
        dev1.put(c1.getAuthor(), 1);
      }
      else {
        dev1.put(c1.getAuthor(), dev1.get(c1.getAuthor()) + 1);
      }
    }
    for (String key: dev1.keySet()) {
      Developer d1 = new Developer(key, dev1.get(key));
      developers.add(d1);
    }

    return developers;
  }


}

package com.example.finalproject;

public class Issue {
  private String state;
  private String url;
  private String title;
  private String update_date;
  private String update_time;

  public Issue(String state, String url, String title, String update_date, String update_time) {
    this.state = state;
    this.url = url;
    this.title = title;
    this.update_date = update_date;
    this.update_time = update_time;
  }

  public String getState() {
    return state;
  }

  public String getTitle() {
    return title;
  }

  public String getUpdate_date() {
    return update_date;
  }

  public String getUrl() {
    return url;
  }

  public String getUpdate_time() {
    return update_time;
  }
}

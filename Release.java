package com.example.finalproject;

public class Release {
  private String author;
  private String message;
  private String date;
  private String name;
  private int commitNum;

  public Release(String author, String message, String date, String name, int commitNum) {
    this.author = author;
    this.message = message;
    this.date = date;
    this.name = name;
    this.commitNum = commitNum;
  }

  public int getCommitNum() {
    return commitNum;
  }

  public String getAuthor() {
    return author;
  }

  public String getDate() {
    return date;
  }

  public String getMessage() {
    return message;
  }

  public String getName() {
    return name;
  }

  public void setCommitNum(int commitNum) {
    this.commitNum = commitNum;
  }
}

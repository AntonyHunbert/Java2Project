package com.example.finalproject;

public class Developer {
  private String name;
  private int commitNum;

  public Developer (String name, int commitNum) {
    this.name = name;
    this.commitNum = commitNum;
  }

  public int getCommitNum() {
    return commitNum;
  }

  public String getName() {
    return name;
  }

  public void setCommitNum(int commitNum) {
    this.commitNum = commitNum;
  }
}


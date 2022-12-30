package com.example.finalproject;

public class Commit {
  private String author;
  private String date;
  private String message;

  public Commit(String author, String date, String message) {
    this.author = author;
    this.date = date;
    this.message = message;
  }

  public String getAuthor() {
    return author;
  }

  public String getMessage() {
    return message;
  }

  public String getDate() {
    return date;
  }
}

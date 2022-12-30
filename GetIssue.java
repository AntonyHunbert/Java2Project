package com.example.finalproject;

import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

public class GetIssue {





    public String getIssue() {
      URL issueUrl = null;
      URLConnection uCon = null;
      BufferedReader br = null;
      PrintWriter pw = null;




      try {
        issueUrl =  new URL("https://api.github.com/repos/Anduin2017/HowToCook/issues");
        uCon = issueUrl.openConnection();
        pw = new PrintWriter(new FileWriter("./repo3-issueDemo.json"), true);
        br = new BufferedReader(new InputStreamReader(uCon.getInputStream()));
        String b1 = null;
        while ((b1 = br.readLine()) != null){
          pw.println(b1);
        }

        return b1;

      } catch (IOException e) {
        throw new RuntimeException(e);
      }
    }



}

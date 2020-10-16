package com.company;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;

public class Main {
    /*
    Question:
    Our friend Monk has been made teacher for the day today by his school professors . He is going to teach informatics to his colleagues as that is his favorite subject . Before entering the class, Monk realized that he does not remember the names of all his colleagues clearly . He thinks this will cause problems and will not allow him to teach the class well. However, Monk remembers the roll number of all his colleagues very well . Monk now wants you to help him out. He will initially give you a list indicating the name and roll number of all his colleagues. When he enters the class he will give you the roll number of any of his colleagues belonging to the class. You need to revert to him with the name of that colleague.

    Input Format

    The first line contains a single integers N denoting the number of Monk's colleagues. Each of the next N lines contains an integer and a String denoting the roll number and name of the i th colleague of Monk. The next Line contains a single integer q denoting the number of queries Monk shall present to you when he starts teaching in class. Each of the next q lines contains a single integer x denoting the roll number of the student whose name Monk wants to know.

    Output Format

    You need to print q Strings, each String on a new line, indicating the answers to each of Monk's queries.

    Note

    The name of each student shall consist of lowercase English alphabets only. It is guaranteed that the roll number appearing in each query shall belong to some student from the class.
     */

    static HashMap<Integer, ArrayList<Colleague>> hashTable = new HashMap<>();

    static class Colleague {
        private String name;
        private int rollNumber;

        public Colleague(String name, int rollNumber) {
            this.name = name;
            this.rollNumber = rollNumber;
        }

        public Colleague(String inputLine) {
            String[] data = inputLine.split(" ");
            this.name = data[1];
            this.rollNumber = Integer.parseInt(data[0]);
        }

        public String getName() {
            return name;
        }

        public int getRollNumber() {
            return rollNumber;
        }
    }

    private static void insertIntoHashTable(int hashIndex, Colleague colleague) {
        if (hashTable.containsKey(hashIndex)) {
            hashTable.get(hashIndex).add(colleague);
        } else {
            ArrayList<Colleague> colleagues = new ArrayList<>();
            colleagues.add(colleague);
            hashTable.put(hashIndex, colleagues);
        }
    }

    private static int getHash(int input) {
        return input % 31;
    }

    private static Colleague getColleague(int hash, int rollNumber) {
        ArrayList<Colleague> colleagues = hashTable.get(hash);
        if (colleagues != null) {
            for (Colleague colleague : colleagues) {
                if (colleague.getRollNumber() == rollNumber) {
                    return colleague;
                }
            }
        }
        return null;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int numberOfColleagues = Integer.parseInt(br.readLine());

        for (int i = 0; i < numberOfColleagues; i++) {
            Colleague colleague = new Colleague(br.readLine());
            int rollNumber = colleague.getRollNumber();
            int hashIndex = getHash(rollNumber);
            insertIntoHashTable(hashIndex, colleague);
        }

        int numberOfQueries = Integer.parseInt(br.readLine());

        for (int i = 0; i < numberOfQueries; i++) {
            int query = Integer.parseInt(br.readLine());
            int hash = getHash(query);
            Colleague colleague = getColleague(hash, query);
            if (colleague != null) {
                System.out.println(colleague.getName());
            }
        }
    }
}

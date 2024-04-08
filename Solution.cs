
using System;

public class Solution
{
    public string GameResult(ListNode head)
    {
        ListNode current = head;
        int balanceEvenScoresMinusOddScores = 0;

        while (current != null)
        {
            balanceEvenScoresMinusOddScores += (current.val > current.next.val) ? 1 : -1;
            current = current.next.next;
        }

        return (balanceEvenScoresMinusOddScores > 0)
                ? "Even"
                : (balanceEvenScoresMinusOddScores < 0)
                ? "Odd"
                : "Tie";
    }
}

/*
Class ListNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}


public class Solution {

    public String gameResult(ListNode head) {
        ListNode current = head;
        int balanceEvenScoresMinusOddScores = 0;

        while (current != null) {
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
class ListNode {

    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}


/*
Class ListNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this class.
 */
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

class Solution {
    fun gameResult(head: ListNode?): String {
        var current: ListNode? = head;
        var balanceEvenScoresMinusOddScores = 0

        while (current != null) {
            balanceEvenScoresMinusOddScores += if (current.`val` > current.next!!.`val`) 1 else -1
            current = current.next?.next
        }

        return when {
            (balanceEvenScoresMinusOddScores > 0) -> "Even"
            (balanceEvenScoresMinusOddScores < 0) -> "Odd"
            else -> "Tie";
        }
    }
}

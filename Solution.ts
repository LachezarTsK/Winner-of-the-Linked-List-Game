
function gameResult(head: ListNode | null): string {
    let current = head;
    let balanceEvenScoresMinusOddScores = 0;

    while (current !== null) {
        balanceEvenScoresMinusOddScores += (current.val > current.next.val) ? 1 : -1;
        current = current.next.next;
    }

    return (balanceEvenScoresMinusOddScores > 0)
           ? "Even"
           : (balanceEvenScoresMinusOddScores < 0)
           ? "Odd"
           : "Tie";
};

/*
Class ListNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

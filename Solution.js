
/**
 * @param {ListNode} head
 * @return {string}
 */
var gameResult = function (head) {
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
 Function ListNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
/**
 * @param {number} val
 * @param {ListNode} next
 * @return {void}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

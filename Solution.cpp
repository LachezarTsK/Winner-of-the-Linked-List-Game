
using namespace std;

/*
Struct ListNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this struct.
 */
struct ListNode {
    int val;
    ListNode* next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {

public:
    string gameResult(ListNode* head) const {
        ListNode* current = head;
        int balanceEvenScoresMinusOddScores = 0;

        while (current != nullptr) {
            balanceEvenScoresMinusOddScores += (current->val > current->next->val) ? 1 : -1;
            current = current->next->next;
        }

        return (balanceEvenScoresMinusOddScores > 0)
                ? "Even"
                : (balanceEvenScoresMinusOddScores < 0)
                ? "Odd"
                : "Tie";
    }
};

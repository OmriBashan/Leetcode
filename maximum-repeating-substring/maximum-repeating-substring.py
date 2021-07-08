class Solution:
    def maxRepeating(self, sequence: str, word: str) -> int:
        x = 0
        while True:
            if word*(x+1) in sequence:
                x += 1
            else:
                return x
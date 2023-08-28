import java.util.HashMap;

class LongestSubstring {
    public int lengthOfLongestSubstring(String s) {
        final HashMap<Character, Integer> chars = new HashMap<Character, Integer>();
        int j = 0;
        int len = 0;

        for (int i = 0; i < s.length(); i++) {
            int charpos = chars.getOrDefault(s.charAt(i), 0);

            j = Math.max(charpos, j);
            len = Math.max(len, i - j + 1);
            chars.put(s.charAt(i), i + 1);
        }

        return len;
    }
}

class LongestPalindrome {
    public String longestPalindrome(String s) {
        int fstart = 0;
        int fend = 0;
        final int len = s.length();

        for (int i = 0; i < len; i++) {
            int start = i;
            int end = i;

            while(start >= 0 && end < len && s.charAt(start) == s.charAt(end)) {
                if ((end - start + 1) > (fend - fstart)) {
                    fstart = start;
                    fend = end;
                }

                start--;
                end++;
            }

            start = i;
            end = i + 1;
            while (start >= 0 && end < len && s.charAt(start) == s.charAt(end)) {
                if ((end - start + 1) > (fend - fstart)) {
                    fstart = start;
                    fend = end;
                }

                start--;
                end++;
            }
        }

        return s.substring(fstart, fend + 1);
    }
}

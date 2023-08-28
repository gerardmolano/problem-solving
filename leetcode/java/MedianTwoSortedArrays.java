class Solution {

    // linear
    public double findMedianSortedArrays1(int[] nums1, int[] nums2) {
        int nums[] = new int[nums1.length + nums2.length];
        int ctr1 = 0;
        int ctr2 = 0;

        while (true) {
            int num;

            if (ctr1 == nums1.length) {
                break;
            }

            if (ctr2 == nums2.length) {
                break;
            }

            if (nums1[ctr1] < nums2[ctr2]) {
                num = nums1[ctr1++];
            } else {
                num = nums2[ctr2++];
            }
            nums[ctr1 + ctr2 - 1] = num;
        }

        while (ctr1 < nums1.length) {
            nums[ctr1 + ctr2] = nums1[ctr1];
            ctr1++;
        }

        while (ctr2 < nums2.length) {
            nums[ctr1 + ctr2] = nums2[ctr2];
            ctr2++;
        }
        
        final int len = nums.length;
        if (len % 2 == 0) {
            return (nums[len / 2 - 1] + nums[len / 2]) / 2f;
        } else {
            return nums[len / 2];
        }
    }

    // binary search
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        final int m = nums1.length;
        final int n = nums2.length;

        if (m > n) {
            return findMedianSortedArrays(nums2, nums1);
        }

        final int MIN_INPUT_VALUE = (int) -Math.pow(10, 6);
        final int MAX_INPUT_VALUE = (int) Math.pow(10, 6);

        final int half = (m + n) / 2;
        int l = 0;
        int r = m - 1;

        while (true) {
            int m1 = (int) Math.floor((l + r) / 2f);
            int m2 = half - m1 - 2;

            final int left1 = (m1 < 0) ? MIN_INPUT_VALUE - 1: nums1[m1];
            final int right1 = (m1 + 1 >= m) ? MAX_INPUT_VALUE + 1: nums1[m1 + 1];

            final int left2 = (m2 < 0) ? MIN_INPUT_VALUE - 1: nums2[m2];
            final int right2 = (m2 + 1 >= n) ? MAX_INPUT_VALUE + 1: nums2[m2 + 1];

            if (left1 <= right2 && left2 <= right1) {
                if ((m + n) % 2 == 0) {
                    return (Math.max(left1, left2) + Math.min(right1, right2)) / 2f;
                } else {
                    return (Math.min(right1, right2));
                }
            } else if (left1 > right2) {
                r = m1 - 1;
            } else {
                l = m1 + 1;
            }
        }
    }
}

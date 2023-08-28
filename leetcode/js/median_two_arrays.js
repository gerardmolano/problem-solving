/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArraysNaive = function(nums1, nums2) {
    const nums = [];
    let ctr1 = 0;
    let ctr2 = 0;

    while (true) {
        let num;

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
        nums.push(num);
    }

    while (ctr1 < nums1.length) {
        nums.push(nums1[ctr1++]);
    }

    while (ctr2 < nums2.length) {
        nums.push(nums2[ctr2++]);
    }

    const len = nums.length;
    if (len % 2 == 0) {
        return (nums[len / 2 - 1] + nums[len / 2]) / 2;
    } else {
        return nums[Math.trunc(len / 2)];
    }
}

var findMedianSortedArraysBinary = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    if (m > n)  {
        return findMedianSortedArraysBinary(nums2, nums1);
    }

    const MAX_INPUT_VALUE = Math.pow(10, 6);
    const MIN_INPUT_VALUE = -Math.pow(10, 6);

    const half = Math.trunc((m + n) / 2);
    let l = 0;
    let r = m - 1;

    while (true) {
        const m1 = Math.floor((l + r) / 2);
        const m2 = half - m1 - 2;

        const left1 = (m1 < 0) ? MIN_INPUT_VALUE - 1 : nums1[m1];
        const right1 = (m1 + 1 >= m) ? MAX_INPUT_VALUE + 1 : nums1[m1 + 1];

        const left2 = (m2 < 0) ? MIN_INPUT_VALUE - 1 : nums2[m2];
        const right2 = (m2 + 1 >= n) ? MAX_INPUT_VALUE + 1 : nums2[m2 + 1];

        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 == 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                return Math.min(right1, right2);
            }
        } else if (left1 > right2) {
            r = m1 - 1;
        } else {
            l = m1 + 1;
        }
    }
}

var findMedianSortedArrays = findMedianSortedArraysBinary;

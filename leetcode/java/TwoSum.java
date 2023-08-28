import java.util.HashMap;

class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> comps = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {

            int comp = target - nums[i];
            if (comps.containsKey(comp)) {
                return new int[] { comps.get(comp), i };
            }

            comps.put(nums[i], i);
        }

        return null;
    }
}

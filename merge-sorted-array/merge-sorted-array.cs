public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        --n;
        --m;
        while(n>=0)
        {
            if (m<0 || nums1[m]<nums2[n])
            {
                nums1[m+n+1]=nums2[n--];
            }
            else 
            {
                nums1[m+n+1]=nums1[m--];
            }
        }
    
    }
}
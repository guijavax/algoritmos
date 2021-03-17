import org.jetbrains.annotations.NotNull;

import java.util.Scanner;

public class Luhm {

    public static void main(String ... args) {
        String number = new Scanner(System.in).next();
        int[] reverseNumbers = sumValuesImp(doubleValue(getInts(number)));
        int res = sumValue(reverseNumbers);
        if(res % 10 == 0) {
            System.out.println("Valido");
        } else {
            System.out.println("Invalido");
        }
    }

    private static int sumValue(int[] nums) {
        int res = 0;
        for (int num : nums) {
            res += num;
        }
        return res;
    }

    private static int[]  sumValuesImp(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if(nums[i] > 9) {
                char[] numbers = String.valueOf(nums[i]).toCharArray();
                nums[i] = Integer.valueOf(Character.getNumericValue(numbers[0]) + Character.getNumericValue(numbers[1]));
            }
        }
        return nums;
    }

    private static int[] doubleValue (int[] numbers) {
        for(int i = 1; i < numbers.length; i+=2) {
            numbers[i] *=2;
        }
        return numbers;
    }

    private static int[] getInts(String number) {
        String[] numbers = number.split(",");
        int i = numbers.length - 1;
        int[] reverseNumbers = new int[numbers.length];
        for(String num : numbers) {
            reverseNumbers[i] = Integer.valueOf(num);
            i--;
        }
        return reverseNumbers;
    }
}

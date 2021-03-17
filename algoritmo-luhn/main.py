# This is a sample Python script.
import array


# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

def reverseNumbers(number):
    leng = len(number)
    numbers = []
    j = leng - 1

    for i in range(leng):
        numbers.append(int(number[j]))
        j = j - 1

    return numbers


def sumNumbersImp(numbers):
    leng = len(numbers)
    for i in range(1, leng, 2):
        numbers[i] = numbers[i] * 2
    return numbers

def sumPairs(numbers):
    leng  = len(numbers)
    for i in range(leng):
        if(numbers[i] > 9):
            numbers[i] = int(str(numbers[i])[0]) + int(str(numbers[i])[1])
    return numbers

def sumNumbers(numbers):
   res = 0
   leng = len(numbers)
   for i in range(leng):
       res = res + numbers[i]
   return res

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    number = input('Number\n')
    numbers = sumPairs(sumNumbersImp(reverseNumbers(number)))
    res = sumNumbers(numbers)
    if res % 10 == 0:
        print('valido')
    else :
        print('invalido')


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
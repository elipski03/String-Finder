def GusfieldsAlgo(str, pattern):
    new_string = pattern + "#" + str
    Z_Array = [0] * len(new_string)

    left = 0
    right = 0

    for i in range(1, len(new_string)):
        if i > right:
            left, right = i, i
            while right < len(new_string) and new_string[right - left] == new_string[right]:
                right += 1
            Z_Array[i] = right - left
            right -= 1
        else:
            k = i - left
            if Z_Array[k] < right - i + 1:
                Z_Array[i] = Z_Array[k]
            else:
                left = i
                while right < len(new_string) and new_string[right-left] == new_string[right]:
                    right += 1
                Z_Array[i] = right - left
                right -= 1
    for i in range(len(new_string)):
        if Z_Array[i] == len(pattern):
            print("Pattern found!")
        

if __name__ == "__main__":
    print(GusfieldsAlgo("asdeasdsadHello, my name is Eden haa,asdwads", "Hello, my name is Eden haha"))
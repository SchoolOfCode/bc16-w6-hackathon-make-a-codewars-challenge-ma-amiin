import { test, expect} from 'vitest'
import { capitalizeNames } from './main';

test("capitaliseNames should capitalize every word in the array", () => {
    // Arrange
    const arr = ["ben", "Henry", "Harry", "mike", "jessica", "ahmed"]
    const expected = ["Ben", "Henry", "Harry", "Mike", "Jessica", "Ahmed"]

    // Act
    const actual = capitalizeNames(arr)

    
    // Assert
    expect(actual).toStrictEqual(expected)

        // Test 1
        const arr1 = ["apple", "banana", "orange"];
        const expected1 = ["Apple", "Banana", "Orange"];
        const actual1 = capitalizeNames(arr1);
        expect(actual1).toStrictEqual(expected1);
    
        // Test 2
        const arr2 = ["hello", "world"];
        const expected2 = ["Hello", "World"];
        const actual2 = capitalizeNames(arr2);
        expect(actual2).toStrictEqual(expected2);
    
        // Test 3
        const arr3 = ["openai", "gpt"];
        const expected3 = ["Openai", "Gpt"];
        const actual3 = capitalizeNames(arr3);
        expect(actual3).toStrictEqual(expected3);
    
        // Test 4
        const arr4 = ["foo", "bar", "baz"];
        const expected4 = ["Foo", "Bar", "Baz"];
        const actual4 = capitalizeNames(arr4);
        expect(actual4).toStrictEqual(expected4);
    
        // Test 5
        const arr5 = ["one", "two", "three"];
        const expected5 = ["One", "Two", "Three"];
        const actual5 = capitalizeNames(arr5);
        expect(actual5).toStrictEqual(expected5);
    
        // Test 6
        const arr6 = ["alpha", "beta", "gamma"];
        const expected6 = ["Alpha", "Beta", "Gamma"];
        const actual6 = capitalizeNames(arr6);
        expect(actual6).toStrictEqual(expected6);
    
        // Test 7
        const arr7 = ["cat", "dog", "bird"];
        const expected7 = ["Cat", "Dog", "Bird"];
        const actual7 = capitalizeNames(arr7);
        expect(actual7).toStrictEqual(expected7);
    
        // Test 8
        const arr8 = ["red", "green", "blue"];
        const expected8 = ["Red", "Green", "Blue"];
        const actual8 = capitalizeNames(arr8);
        expect(actual8).toStrictEqual(expected8);
    
        // Test 9
        const arr9 = ["one", "two", "three"];
        const expected9 = ["One", "Two", "Three"];
        const actual9 = capitalizeNames(arr9);
        expect(actual9).toStrictEqual(expected9);
    
        // Test 10
        const arr10 = ["java", "python", "javascript"];
        const expected10 = ["Java", "Python", "Javascript"];
        const actual10 = capitalizeNames(arr10);
        expect(actual10).toStrictEqual(expected10);
    });

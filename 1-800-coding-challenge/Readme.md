# 1-800-CODING-CHALLENGE

## Initial setup
```
1. Move to project root folder
2. Install dependencies 
npm i
```

## Running the application
```
node src/index.js -d {path to dictonary file?} {path to numbers file} number
```

**Examples**

+ The following example runs the application with 225563 as number for input and default dictionary
```
node src/index.js 225563
```

+ The following example runs the application with multiple numbers 225563, 356937 and default dictionary.
```
node src/index.js 225563 356937
```

+ The following example runs the application with 225563 as number for input and user provided dictionary.
*Note For dictionary only txt files are supported*
```
node src/index.js -d path/to/dictionary/folder/dictionary.txt 225563
```

+ The following example runs the application with numbers file.
*Note For numbers file only txt files are supported*
```
node src/index.js path/to/numbers/folder/numbers.txt
```

+ The following example runs the application with numbers file, number input and user provided dictionary.
```
node src/index.js -d path/to/numbers/dictionary/dictionary.txt path/to/numbers/folder/numbers.txt 225563 
```

## Output
The application will output results in `{number}:{encoding}` format. For eg `225563:CALL-ME`. Each result will be in a single line. The application will print appropriate logs for improper input data and proceed with remaining data.

## Tests
The tests are present in the __tests__ directory. To run the entire test suite use the command `npm run test`
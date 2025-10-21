function solution(files) {
    const originalFiles = [...files]; // 원본 파일 순서를 유지하기 위해 복사

    const parsedFiles = originalFiles.map((file, index) => {
        const convertedFile = file.toLowerCase();
        
        let start = -1; // NUMBER 시작 인덱스
        let end = convertedFile.length; 
        let numberLength = 0; 

        for (let i = 0; i < convertedFile.length; i++) {
            const char = convertedFile[i];
            const isDigit = char >= '0' && char <= '9';

            if (start === -1) {
                if (isDigit) {
                    start = i; 
                    numberLength++;
                }
            } else {
                if (isDigit && numberLength < 5) {
                    numberLength++;
                } else {
                    end = i; 
                    break; 
                }
            }
        }
        
        if (start === -1) {
             start = convertedFile.length;
        }

        const head = convertedFile.substring(0, start);
        const numberStr = convertedFile.substring(start, end); 
        const number = parseInt(numberStr, 10);

        return {
            original: file,
            head: head,
            number: number,
            index: index 
        };
    });

    parsedFiles.sort((a, b) => {
        if (a.head < b.head) return -1;
        if (a.head > b.head) return 1;

        if (a.number !== b.number) {
            return a.number - b.number;
        }

        return a.index - b.index;
    });

    return parsedFiles.map(file => file.original);
}
class MinHeap {
    constructor() {
        this.heap = []; 
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }


    peek() {
        return this.heap.length === 0 ? undefined : this.heap[0];
    }
    

    size() {
        return this.heap.length;
    }


    push(value) {
        this.heap.push(value);
        
        this.bubbleUp(); 
    }


    pop() {
        if (this.heap.length === 0) {
            return undefined;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        this.swap(0, this.heap.length - 1);
        
        const min = this.heap.pop(); 
        
        this.bubbleDown(); 
        
        return min;
    }

    bubbleUp() {
        let currentIndex = this.heap.length - 1;
        
        while (currentIndex > 0) {
            const parentIndex = this.getParentIndex(currentIndex);

            // 부모 노드가 현재 노드보다 작거나 같으면 멈춤 (Min Heap 만족)
            if (this.heap[parentIndex] <= this.heap[currentIndex]) {
                break;
            }

            // 부모 노드가 더 크면 교환하고, 인덱스를 부모 위치로 업데이트
            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex; 
        }
    }

    bubbleDown() {
        let currentIndex = 0;
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = this.getLeftChildIndex(currentIndex);
            let rightChildIndex = this.getRightChildIndex(currentIndex);
            let smallestIndex = currentIndex; // 현재 노드, 왼쪽/오른쪽 자식 중 가장 작은 값의 인덱스

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === currentIndex) {
                break;
            }

            this.swap(currentIndex, smallestIndex);
            currentIndex = smallestIndex; 
        }
    }
}



function solution(scoville, K) {
    var answer = 0;
    const heap = new MinHeap()
    
    for(const scov of scoville){
        heap.push(scov)
    }
    
    while(heap.peek() < K ){
        
        if(heap.size() < 2){
            return -1; 
        }
        
        let first = heap.pop();  
        let second = heap.pop(); 
        
        let newScoville = first + (second * 2);
        
        answer += 1;
        heap.push(newScoville);
    }
    
    return answer
}
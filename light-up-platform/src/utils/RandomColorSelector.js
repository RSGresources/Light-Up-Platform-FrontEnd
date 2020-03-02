class RandomColorSelector {
    constructor() {
        this.buffer1 = [
            '#EFA1A1',
            '#6C99F2',
            '#BEA1EF',
            '#94C5F3',
            '#A0A0A0',
            '#F2A46C',
            '#BB7070',
            '#63BB71',
            '#6C7781',
            '#378A40',
            '#DF49E2',
            '#DE6969',
            '#74B6F2'
        ]
        this.buffer2 = []
    }

    getColor() {

        if (this.buffer1.length === 0) {
            const index = Math.ceil(Math.random() * (this.buffer2.length - 1))
            const selection = this.buffer2.splice(index, 1)[0]
            this.buffer1.push(selection)
            return selection
        } else {
            const index = Math.ceil(Math.random() * (this.buffer1.length - 1))
            const selection = this.buffer1.splice(index, 1)[0]
            this.buffer2.push(selection)
            return selection
        }
    }
}

export default RandomColorSelector
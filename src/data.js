const tableData = [
    {
        name: 'Parent',
        parentId: null,
        avail: 250,
        need: 120,
        taken: 50,
        _id: 1,
        level: 1,
    },
    {
        name: 'Parent > child-L1-a',
        parentId: 1,
        avail: 50,
        need: 20,
        taken: 10,
        _id: 3,
        level: 2,
    },
    {
        name: 'Parent > child-L1-a > child-L2-a',
        parentId: 3,
        avail: 50,
        need: 20,
        taken: 10,
        _id: 2,
        level: 3,
    },
    {
        name: 'Parent > child-L1-a > child-L2-a > child-L3-a',
        parentId: 2,
        avail: 50,
        need: 20,
        taken: 10,
        _id: 4,
        level: 4,
    },
    {
        name: 'Parent > child-L1-b',
        parentId: 1,
        avail: 100,
        need: 50,
        taken: 20,
        _id: 5,
        level: 2,
    },
    {
        name: 'Parent > child-L1-b > child-L2-a',
        parentId: 5,
        avail: 100,
        need: 50,
        taken: 20,
        _id: 6,
        level: 3,
    },
    {
        name: 'Parent > child-L1-b > child-L2-a > child-L3-a',
        parentId: 6,
        avail: 50,
        need: 25,
        taken: 10,
        _id: 7,
        level: 4,
    },
    {
        name: 'Parent > child-L1-b > child-L2-a > child-L3-b',
        parentId: 6,
        avail: 50,
        need: 25,
        taken: 10,
        _id: 8,
        level: 4,
    },
    {
        name: 'Parent > child-L1-c',
        parentId: 1,
        avail: 100,
        need: 50,
        taken: 20,
        _id: 9,
        level: 2,
    },
    {
        name: 'Parent > child-L1-c > child-L2-b',
        parentId: 9,
        avail: 100,
        need: 50,
        taken: 20,
        _id: 10,
        level: 3,
    },
    {
        name: 'Parent > child-L1-c > child-L2-a',
        parentId: 9,
        avail: 100,
        need: 50,
        taken: 20,
        _id: 11,
        level: 3,
    },
    {
        name: 'Parent > child-L1-c > child-L2-a > child-L3-a',
        parentId: 11,
        avail: 100,
        need: 50,
        taken: 20,
        _id: 12,
        level: 4,
    },
    {
        name: 'Parent > child-L1-c > child-L2-a > child-L3-a > child-L4-a',
        parentId: 12,
        avail: 100,
        need: 50,
        taken: 20,
        _id: 13,
        level: 5,
    },
    {
        name: 'Parent > child-L1-c > child-L2-a > child-L3-a > child-L4-a > child-L5-a',
        parentId: 13,
        avail: 100,
        need: 50,
        taken: 20,
        _id: 14,
        level: 6,
    },
]
const rD = () => {
    let data = [
        {
            name: "Parent",
            parentId: null,
            avail: 100,
            need: 50,
            taken: 20,
            _id: 1,
        },
    ];
    for (let i = 1; i <= 3; i++) {
        let pt = i + 1;
        data.push({
            name: `Parent -> Child -> ${pt}`,
            parentId: 1,
            avail: 100,
            need: 50,
            taken: 20,
            _id: pt,
        });
        for (let k = 0; k <= pt; k++) {
            let x = k + 1;
            data.push({
                name: `Parent -> Child -> Child -> ${k}`,
                parentId: pt,
                avail: 100,
                need: 50,
                taken: 20,
                _id: pt + x,
            });
            for (let l = 0; l <= x; l++) {
                let y = l + 1;
                data.push({
                    name: `Parent -> Child -> Child -> Child -> ${y}`,
                    parentId: pt + x,
                    avail: 100,
                    need: 50,
                    taken: 20,
                    _id: Math.random(),
                });
            }
        }
    }
    return data;
}
export default {
    tableData, rD
}
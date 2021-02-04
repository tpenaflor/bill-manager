export const billFixture = [{
    id: "4efa1ac1-2d6f-49a5-834b-d4d5f0e7c97c",
    desc: "beer",
    allocation: {
        participant: [],
        unitCount: "10"
    },
    amount: "1000",
    splitOpt: "unit"
}, {
    id: "5190a7eb-78a8-4c08-bd2c-9afb1d239d83",
    desc: "coke",
    allocation: {
        participant: [{
            id: "ac33c426-53c4-4d38-ba0f-f8e569a9a507",
            count: 3
        }, {
            id: "3712fdf0-5b62-41b6-9442-b35a41d5ec81",
            count: 1
        }],
        unitCount: "5"
    },
    amount: "1000",
    splitOpt: "unit"
}, {
    id: "1fa52528-0aac-44ab-a92d-2bbd09c9bb75",
    desc: "water",
    allocation: {
        participant: [{
            id: "a4714460-a11c-4681-a21d-c7de2c57a02c",
            count: 1
        }, {
            id: "3712fdf0-5b62-41b6-9442-b35a41d5ec81",
            count: 1
        }],
        unitCount: 2
    },
    amount: "400",
    splitOpt: "even"
}, {
    id: "10930ccf-0720-445f-95d2-e8945a0233ad",
    desc: "electricity",
    allocation: {
        participant: [{
            id: "ac33c426-53c4-4d38-ba0f-f8e569a9a507",
            count: 1
        }],
        unitCount: 1
    },
    amount: "1500",
    splitOpt: "even"
}]
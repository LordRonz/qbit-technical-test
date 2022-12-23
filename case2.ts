type IComment = {
    commentId: number;
    commentContent: string;

    replies?: IComment[];
};

const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa',
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa',
                    },
                ],
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa',
                    },
                ],
            },
        ],
    },
    {
        commentId: 2,
        commentContent: 'Halooo',
    },
];

console.log('---Case 2---');

console.log(
    '5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.',
);

const countCommentId = (obj: IComment) => {
    if (typeof obj !== 'object' || obj === null) {
        return 0;
    }
    const keys = Object.keys(obj);
    let sum = keys.filter((v) => v === 'commentId').length;
    keys.forEach((key) => {
        return (sum += countCommentId((obj as { [key: string]: any })[key]));
    });
    return sum;
};

console.log(
    `Total komentar: ${comments
        .map((v) => countCommentId(v))
        .reduce((a, b) => a + b, 0)}`,
);

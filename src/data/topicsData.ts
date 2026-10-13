import { Topic } from '../types/math';

export const TOPICS: Topic[] = [
  {
    id: 'concept',
    title: 'Khái Niệm Số Thập Phân',
    shortTitle: 'Khái niệm',
    description: 'Chuyển đổi phân số thập phân, cấu tạo phần nguyên và phần thập phân của số thập phân.',
    iconName: 'Sparkles',
    color: 'emerald',
    theory: {
      summary: 'Số thập phân gồm có hai phần: Phần nguyên (bên trái dấu phẩy) và Phần thập phân (bên phải dấu phẩy).',
      points: [
        'Các phân số có mẫu số là 10, 100, 1000... được gọi là phân số thập phân.',
        '[frac:1:10] viết thành 0,1 (đọc là không phẩy một); [frac:1:100] viết thành 0,01; [frac:1:1000] viết thành 0,001.',
        'Số chữ số ở phần thập phân bằng đúng số chữ số 0 ở mẫu số của phân số thập phân.',
        'Ví dụ: 8,56 có phần nguyên là 8, phần thập phân là 56.'
      ],
      examples: [
        { expression: '[frac:5:10]', meaning: '= 0,5 (Một chữ số 0 ở mẫu -> 1 chữ số sau dấu phẩy)' },
        { expression: '[frac:7:100]', meaning: '= 0,07 (Hai chữ số 0 ở mẫu -> 2 chữ số sau dấu phẩy)' },
        { expression: '[frac:125:1000]', meaning: '= 0,125 (Ba chữ số 0 ở mẫu -> 3 chữ số sau dấu phẩy)' },
        { expression: '[mixed:3:4:10]', meaning: '= 3,4 (Hỗn số có phần nguyên là 3, phần thập phân là [frac:4:10] = 0,4)' }
      ]
    },
    questions: [
      {
        id: 'c1',
        topicId: 'concept',
        prompt: 'Phân số thập phân [frac:7:10] được viết dưới dạng số thập phân là gì?',
        type: 'choice',
        options: ['0,7', '7,0', '0,07', '0,007'],
        correctAnswer: '0,7',
        difficulty: 'easy',
        explanation: {
          rule: 'Quy tắc viết phân số thập phân mẫu số 10 thành số thập phân.',
          stepByStep: [
            'Mẫu số là 10 (có 1 chữ số 0), nên phần thập phân sẽ có đúng 1 chữ số.',
            'Tử số là 7, do đó [frac:7:10] = 0,7.',
          ],
          tips: 'Ghi nhớ: Mẫu số có bao nhiêu số 0 thì sau dấu phẩy có bấy nhiêu chữ số!'
        }
      },
      {
        id: 'c2',
        topicId: 'concept',
        prompt: 'Phân số thập phân [frac:9:100] được viết dưới dạng số thập phân là:',
        type: 'choice',
        options: ['0,9', '0,09', '0,009', '9,00'],
        correctAnswer: '0,09',
        difficulty: 'easy',
        explanation: {
          rule: 'Chuyển phân số có mẫu là 100 sang số thập phân.',
          stepByStep: [
            'Mẫu số là 100 có 2 chữ số 0.',
            'Phần thập phân phải có 2 chữ số. Vì tử số là 9 (chỉ có 1 chữ số), ta thêm chữ số 0 vào trước số 9.',
            'Vậy [frac:9:100] = 0,09.'
          ],
          tips: 'Cẩn thận tránh nhầm lẫn [frac:9:100] với 0,9 (vì 0,9 = [frac:9:10]).'
        }
      },
      {
        id: 'c3',
        topicId: 'concept',
        prompt: 'Trong số thập phân 24,68 thì phần nguyên và phần thập phân lần lượt là:',
        type: 'choice',
        options: [
          'Phần nguyên là 24, phần thập phân là 68',
          'Phần nguyên là 68, phần thập phân là 24',
          'Phần nguyên là 2, phần thập phân là 8',
          'Phần nguyên là 4, phần thập phân là 6'
        ],
        correctAnswer: 'Phần nguyên là 24, phần thập phân là 68',
        difficulty: 'easy',
        explanation: {
          rule: 'Cấu tạo của số thập phân gồm hai phần.',
          stepByStep: [
            'Những chữ số ở bên trái dấu phẩy tạo thành phần nguyên (ở đây là 24).',
            'Những chữ số ở bên phải dấu phẩy tạo thành phần thập phân (ở đây là 68).'
          ],
          tips: 'Dấu phẩy chính là ranh giới ngăn đôi phần nguyên bên trái và phần thập phân bên phải.'
        }
      },
      {
        id: 'c4',
        topicId: 'concept',
        prompt: 'Hỗn số [mixed:5:3:100] được viết thành số thập phân là:',
        type: 'choice',
        options: ['5,3', '5,03', '5,003', '0,53'],
        correctAnswer: '5,03',
        difficulty: 'medium',
        explanation: {
          rule: 'Chuyển hỗn số có phần phân số thập phân thành số thập phân.',
          stepByStep: [
            'Phần nguyên của hỗn số là 5, ta giữ nguyên làm phần nguyên: 5,...',
            'Phần phân số là [frac:3:100] = 0,03.',
            'Kết hợp lại ta được số thập phân: 5,03.'
          ],
          tips: '[frac:3:100] có 2 chữ số sau dấu phẩy nên phải là 03, không được viết thành 5,3!'
        }
      },
      {
        id: 'c5',
        topicId: 'concept',
        prompt: 'Số thập phân 0,045 tương ứng với phân số thập phân nào dưới đây?',
        type: 'choice',
        options: ['[frac:45:10]', '[frac:45:100]', '[frac:45:1000]', '[frac:45:10000]'],
        correctAnswer: '[frac:45:1000]',
        difficulty: 'medium',
        explanation: {
          rule: 'Chuyển số thập phân về phân số thập phân.',
          stepByStep: [
            'Phần thập phân của 0,045 gồm có 3 chữ số (0, 4, 5).',
            'Mẫu số tương ứng phải có 3 chữ số 0, tức là 1000.',
            'Tử số là 45. Vậy phân số thập phân là [frac:45:1000].'
          ]
        }
      },
      {
        id: 'c6',
        topicId: 'concept',
        prompt: 'Viết phân số [frac:3:5] dưới dạng số thập phân:',
        subPrompt: 'Gợi ý: Nhân cả tử và mẫu với 2 để đưa về mẫu số 10',
        type: 'choice',
        options: ['0,3', '0,5', '0,6', '3,5'],
        correctAnswer: '0,6',
        difficulty: 'hard',
        explanation: {
          rule: 'Quy đồng phân số về mẫu số thập phân trước khi chuyển đổi.',
          stepByStep: [
            'Ta có: [frac:3:5] = [frac:6:10].',
            'Phân số thập phân [frac:6:10] viết thành số thập phân là 0,6.'
          ],
          tips: 'Mẫu số 5 chỉ cần nhân 2 là thành 10; mẫu số 4 nhân 25 thành 100; mẫu số 25 nhân 4 thành 100.'
        }
      },
      {
        id: 'c7',
        topicId: 'concept',
        prompt: 'Điền số thích hợp: Phân số thập phân [frac:125:100] bằng số thập phân nào?',
        type: 'fill',
        correctAnswer: '1,25',
        difficulty: 'medium',
        explanation: {
          rule: 'Viết phân số thập phân lớn hơn 1 thành số thập phân.',
          stepByStep: [
            'Tử số là 125, mẫu số là 100 (có 2 chữ số 0).',
            'Đếm từ phải sang trái 2 chữ số của tử số rồi đặt dấu phẩy: sau số 1 là dấu phẩy.',
            'Vậy [frac:125:100] = 1,25.'
          ]
        }
      },
      {
        id: 'c8',
        topicId: 'concept',
        prompt: 'Hỗn số [mixed:18:25:100] được viết dưới dạng số thập phân là:',
        type: 'choice',
        options: ['18,25', '18,250', '1,825', '182,5'],
        correctAnswer: '18,25',
        difficulty: 'easy',
        explanation: {
          rule: 'Chuyển hỗn số có mẫu số 100 thành số thập phân.',
          stepByStep: [
            'Phần nguyên là 18.',
            'Phần phân số [frac:25:100] = 0,25.',
            'Ghép phần nguyên và phần thập phân: 18,25.'
          ]
        }
      },
      {
        id: 'c9',
        topicId: 'concept',
        prompt: 'Phân số thập phân [frac:4:1000] viết thành số thập phân là:',
        type: 'choice',
        options: ['0,4', '0,04', '0,004', '0,0004'],
        correctAnswer: '0,004',
        difficulty: 'medium',
        explanation: {
          rule: 'Mẫu số 1000 có 3 chữ số 0.',
          stepByStep: [
            'Mẫu số 1000 có 3 chữ số 0 nên sau dấu phẩy phải có 3 chữ số.',
            'Tử số là 4 nên ta viết hai số 0 phía trước: 0,004.'
          ]
        }
      },
      {
        id: 'c10',
        topicId: 'concept',
        prompt: 'Điền số thích hợp: Phân số [frac:3:4] được viết thành số thập phân là:',
        subPrompt: 'Gợi ý: Nhân cả tử và mẫu với 25 để đưa về mẫu số 100',
        type: 'fill',
        correctAnswer: '0,75',
        difficulty: 'hard',
        explanation: {
          rule: 'Đưa phân số về mẫu số thập phân 100.',
          stepByStep: [
            'Ta có: [frac:3:4] = [frac:75:100].',
            'Phân số thập phân [frac:75:100] viết thành số thập phân là 0,75.'
          ]
        }
      }
    ]
  },
  {
    id: 'place-value',
    title: 'Xác Định Các Hàng Của Số Thập Phân',
    shortTitle: 'Các hàng số TP',
    description: 'Nắm vững bảng các hàng: hàng chục, đơn vị, hàng phần mười, phần trăm, phần nghìn.',
    iconName: 'Layers',
    color: 'blue',
    theory: {
      summary: 'Mỗi chữ số trong số thập phân đều đứng ở một hàng và mang một giá trị nhất định tùy theo vị trí của nó.',
      points: [
        'Phần nguyên: Kể từ dấu phẩy sang trái là: hàng đơn vị, hàng chục, hàng trăm, hàng nghìn...',
        'Phần thập phân: Kể từ dấu phẩy sang phải là: hàng phần mười, hàng phần trăm, hàng phần nghìn, hàng phần chục nghìn...',
        'Mỗi đơn vị của một hàng gấp 10 lần đơn vị của hàng liền sau nó (hoặc bằng 1/10 đơn vị hàng liền trước).'
      ],
      table: {
        headers: ['Hàng trăm', 'Hàng chục', 'Hàng đơn vị', '[Phẩy]', 'Hàng phần mười', 'Hàng phần trăm', 'Hàng phần nghìn'],
        rows: [
          ['3', '7', '5', ',', '8', '2', '4']
        ]
      },
      examples: [
        { expression: 'Trong số 375,824:', meaning: 'Chữ số 7 ở hàng chục (giá trị 70); chữ số 5 ở hàng đơn vị (giá trị 5)' },
        { expression: 'Chữ số 8:', meaning: 'Ở hàng phần mười (giá trị là [frac:8:10] hay 0,8)' },
        { expression: 'Chữ số 2:', meaning: 'Ở hàng phần trăm (giá trị là [frac:2:100] hay 0,02)' },
        { expression: 'Chữ số 4:', meaning: 'Ở hàng phần nghìn (giá trị là [frac:4:1000] hay 0,004)' }
      ]
    },
    questions: [
      {
        id: 'pv1',
        topicId: 'place-value',
        prompt: 'Trong số thập phân 85,342 chữ số 3 thuộc hàng nào?',
        type: 'choice',
        options: ['Hàng chục', 'Hàng đơn vị', 'Hàng phần mười', 'Hàng phần trăm'],
        correctAnswer: 'Hàng phần mười',
        difficulty: 'easy',
        explanation: {
          rule: 'Vị trí hàng ngay sau dấu phẩy.',
          stepByStep: [
            'Chữ số ngay bên phải dấu phẩy luôn là hàng phần mười.',
            'Trong số 85,342 chữ số 3 đứng ngay sau dấu phẩy, nên chữ số 3 thuộc hàng phần mười.'
          ],
          tips: 'Nhớ thứ tự từ trái qua phải sau dấu phẩy: phần mười -> phần trăm -> phần nghìn.'
        }
      },
      {
        id: 'pv2',
        topicId: 'place-value',
        prompt: 'Trong số thập phân 194,567 chữ số 6 thuộc hàng nào và có giá trị là bao nhiêu?',
        type: 'choice',
        options: [
          'Hàng phần trăm, có giá trị là [frac:6:100] (hay 0,06)',
          'Hàng phần mười, có giá trị là [frac:6:10]',
          'Hàng chục, có giá trị là 60',
          'Hàng phần nghìn, có giá trị là [frac:6:1000]'
        ],
        correctAnswer: 'Hàng phần trăm, có giá trị là [frac:6:100] (hay 0,06)',
        difficulty: 'medium',
        explanation: {
          rule: 'Xác định hàng và giá trị của chữ số ở phần thập phân.',
          stepByStep: [
            'Sau dấu phẩy, chữ số 5 là hàng phần mười.',
            'Chữ số tiếp theo là 6, đứng ở vị trí thứ hai sau dấu phẩy nên thuộc hàng phần trăm.',
            'Giá trị của chữ số 6 ở hàng phần trăm là [frac:6:100] = 0,06.'
          ]
        }
      },
      {
        id: 'pv3',
        topicId: 'place-value',
        prompt: 'Số thập phân nào có: 8 đơn vị, 9 phần mười và 5 phần nghìn?',
        type: 'choice',
        options: ['8,95', '8,905', '8,095', '85,9'],
        correctAnswer: '8,905',
        difficulty: 'medium',
        explanation: {
          rule: 'Lập số thập phân từ các hàng cho trước.',
          stepByStep: [
            'Hàng đơn vị là 8 -> phần nguyên là 8.',
            'Hàng phần mười là 9 -> chữ số thứ nhất sau dấu phẩy là 9.',
            'Đề bài không nhắc đến hàng phần trăm, nghĩa là hàng phần trăm bằng 0.',
            'Hàng phần nghìn là 5 -> chữ số thứ ba sau dấu phẩy là 5.',
            'Ghép lại ta được số: 8,905.'
          ],
          tips: 'Hàng nào bị khuyết thì chữ số ở hàng đó phải là 0!'
        }
      },
      {
        id: 'pv4',
        topicId: 'place-value',
        prompt: 'Giá trị của chữ số 7 trong số thập phân 43,782 là:',
        type: 'choice',
        options: ['7', '[frac:7:10] (hay 0,7)', '[frac:7:100] (hay 0,07)', '70'],
        correctAnswer: '[frac:7:10] (hay 0,7)',
        difficulty: 'easy',
        explanation: {
          rule: 'Giá trị của chữ số ở hàng phần mười.',
          stepByStep: [
            'Chữ số 7 nằm ở hàng phần mười.',
            'Do đó giá trị của nó là [frac:7:10] hay 0,7.'
          ]
        }
      },
      {
        id: 'pv5',
        topicId: 'place-value',
        prompt: 'Số thập phân gồm "3 chục, 5 đơn vị, 6 phần mười và 8 phần trăm" viết là:',
        type: 'fill',
        correctAnswer: '35,68',
        difficulty: 'easy',
        explanation: {
          rule: 'Cấu tạo số từ hàng chục, đơn vị, phần mười, phần trăm.',
          stepByStep: [
            'Phần nguyên gồm 3 chục và 5 đơn vị: 35.',
            'Phần thập phân gồm 6 phần mười và 8 phần trăm: 68.',
            'Số thập phân hoàn chỉnh là: 35,68.'
          ]
        }
      },
      {
        id: 'pv6',
        topicId: 'place-value',
        prompt: 'Trong số thập phân 205,078 chữ số 0 thứ nhất và chữ số 0 thứ hai lần lượt thuộc hàng nào?',
        type: 'choice',
        options: [
          'Hàng chục và Hàng phần mười',
          'Hàng trăm và Hàng đơn vị',
          'Hàng phần mười và Hàng phần trăm',
          'Hàng đơn vị và Hàng phần mười'
        ],
        correctAnswer: 'Hàng chục và Hàng phần mười',
        difficulty: 'hard',
        explanation: {
          rule: 'Phân biệt chữ số 0 ở phần nguyên và phần thập phân.',
          stepByStep: [
            'Trong 205: chữ số 2 là hàng trăm, chữ số 0 nằm giữa 2 và 5 là hàng chục, chữ số 5 là hàng đơn vị.',
            'Sau dấu phẩy (,078): chữ số 0 đứng ngay sau dấu phẩy là hàng phần mười.',
            'Vậy đáp án là Hàng chục và Hàng phần mười.'
          ]
        }
      },
      {
        id: 'pv7',
        topicId: 'place-value',
        prompt: 'Trong số thập phân 52,149 chữ số 9 có giá trị là gì?',
        type: 'choice',
        options: ['[frac:9:10]', '[frac:9:100]', '[frac:9:1000]', '9'],
        correctAnswer: '[frac:9:1000]',
        difficulty: 'medium',
        explanation: {
          rule: 'Xác định giá trị chữ số ở hàng phần nghìn.',
          stepByStep: [
            'Số 52,149 có: 1 ở hàng phần mười, 4 ở hàng phần trăm, 9 ở hàng phần nghìn.',
            'Vì đứng ở hàng phần nghìn nên chữ số 9 có giá trị là [frac:9:1000] (hay 0,009).'
          ]
        }
      },
      {
        id: 'pv8',
        topicId: 'place-value',
        prompt: 'Số thập phân có: "0 đơn vị, 4 phần mười, 0 phần trăm và 8 phần nghìn" viết là:',
        type: 'fill',
        correctAnswer: '0,408',
        difficulty: 'easy',
        explanation: {
          rule: 'Viết số thập phân theo các hàng.',
          stepByStep: [
            'Phần nguyên là 0 đơn vị: 0,',
            'Phần thập phân có 4 ở hàng phần mười, 0 ở hàng phần trăm, 8 ở hàng phần nghìn: 408.',
            'Số viết được là: 0,408.'
          ]
        }
      },
      {
        id: 'pv9',
        topicId: 'place-value',
        prompt: 'Trong số thập phân 678,25 chữ số 7 có giá trị gấp bao nhiêu lần chữ số 2?',
        type: 'choice',
        options: ['350 lần', '35 lần', '100 lần', '10 lần'],
        correctAnswer: '350 lần',
        difficulty: 'hard',
        explanation: {
          rule: 'So sánh giá trị vị trí của hai chữ số.',
          stepByStep: [
            'Chữ số 7 ở hàng chục có giá trị là 70.',
            'Chữ số 2 ở hàng phần mười có giá trị là 0,2 (tức là [frac:2:10]).',
            'Ta có: 70 : 0,2 = 350 lần.'
          ]
        }
      },
      {
        id: 'pv10',
        topicId: 'place-value',
        prompt: 'Số thập phân gồm "2 trăm, 5 đơn vị, 3 phần mười và 7 phần nghìn" viết là:',
        type: 'choice',
        options: ['205,307', '25,37', '205,37', '250,307'],
        correctAnswer: '205,307',
        difficulty: 'hard',
        explanation: {
          rule: 'Điền đúng các hàng bị khuyết chữ số 0.',
          stepByStep: [
            'Hàng trăm là 2, hàng chục khuyết (0), hàng đơn vị là 5 -> phần nguyên là 205.',
            'Hàng phần mười là 3, hàng phần trăm khuyết (0), hàng phần nghìn là 7 -> phần thập phân là 307.',
            'Số viết được là: 205,307.'
          ]
        }
      }
    ]
  },
  {
    id: 'read-write',
    title: 'Đọc Và Viết Số Thập Phân',
    shortTitle: 'Đọc & Viết',
    description: 'Quy tắc đọc từ phần nguyên sang phần thập phân, và viết chính xác từ văn bản sang dạng số.',
    iconName: 'BookOpen',
    color: 'amber',
    theory: {
      summary: 'Muốn đọc một số thập phân, ta đọc phần nguyên trước, đọc từ "phẩy", sau đó đọc phần thập phân.',
      points: [
        'Muốn viết một số thập phân, ta viết phần nguyên trước, viết dấu phẩy, sau đó viết phần thập phân.',
        'Chú ý các cách đọc: Có thể đọc theo từng chữ số (ví dụ: ba mươi lăm phẩy bốn mươi sáu hoặc ba mươi lăm phẩy bốn sáu).',
        'Cẩn thận với các chữ số 0 ở đầu phần thập phân: ví dụ 0,08 đọc là "không phẩy không tám".'
      ],
      examples: [
        { expression: '85,72', meaning: 'Đọc là: Tám mươi lăm phẩy bảy mươi hai' },
        { expression: '0,009', meaning: 'Đọc là: Không phẩy không không chín (hoặc chín phần nghìn)' },
        { expression: '302,4', meaning: 'Đọc là: Ba trăm linh hai phẩy bốn' }
      ]
    },
    questions: [
      {
        id: 'rw1',
        topicId: 'read-write',
        prompt: 'Số thập phân 45,06 được đọc đúng là:',
        type: 'choice',
        options: [
          'Bốn mươi lăm phẩy không sáu',
          'Bốn mươi lăm phẩy sáu',
          'Bốn trăm linh năm phẩy sáu',
          'Bốn mươi lăm phẩy sáu mươi'
        ],
        correctAnswer: 'Bốn mươi lăm phẩy không sáu',
        difficulty: 'easy',
        explanation: {
          rule: 'Đọc số thập phân có chữ số 0 ở hàng phần mười.',
          stepByStep: [
            'Phần nguyên là 45 đọc là: "Bốn mươi lăm".',
            'Dấu phẩy đọc là: "phẩy".',
            'Phần thập phân là 06 đọc là: "không sáu".',
            'Ghép lại: "Bốn mươi lăm phẩy không sáu".'
          ],
          tips: 'Nếu đọc là "Bốn mươi lăm phẩy sáu" thì đó là số 45,6 (hoàn toàn khác 45,06)!'
        }
      },
      {
        id: 'rw2',
        topicId: 'read-write',
        prompt: 'Số "Bảy mươi đơn vị, bốn phần mười và hai phần trăm" được viết là:',
        type: 'choice',
        options: ['70,42', '74,2', '7,042', '70,042'],
        correctAnswer: '70,42',
        difficulty: 'easy',
        explanation: {
          rule: 'Viết số theo cấu tạo các hàng.',
          stepByStep: [
            'Bảy mươi đơn vị -> phần nguyên là 70.',
            'Bốn phần mười -> chữ số 4 ở vị trí thứ nhất sau dấu phẩy.',
            'Hai phần trăm -> chữ số 2 ở vị trí thứ hai sau dấu phẩy.',
            'Viết là: 70,42.'
          ]
        }
      },
      {
        id: 'rw3',
        topicId: 'read-write',
        prompt: 'Viết số thập phân: "Không phẩy không không tám"',
        type: 'fill',
        correctAnswer: '0,008',
        difficulty: 'medium',
        explanation: {
          rule: 'Viết số thập phân có chữ số ở hàng phần nghìn.',
          stepByStep: [
            'Không phẩy -> 0,',
            'không không tám -> sau dấu phẩy có 2 chữ số 0 rồi đến số 8.',
            'Viết số: 0,008.'
          ]
        }
      },
      {
        id: 'rw4',
        topicId: 'read-write',
        prompt: 'Số "Hai trăm linh tư phẩy năm mươi mốt" được viết là:',
        type: 'choice',
        options: ['204,51', '24,51', '204,15', '240,51'],
        correctAnswer: '204,51',
        difficulty: 'medium',
        explanation: {
          rule: 'Viết phần nguyên có chữ số 0 ở hàng chục (linh tư = 04).',
          stepByStep: [
            'Hai trăm linh tư = 204.',
            'Dấu phẩy = ,',
            'Năm mươi mốt = 51.',
            'Số viết được là: 204,51.'
          ]
        }
      },
      {
        id: 'rw5',
        topicId: 'read-write',
        prompt: 'Số "Mười lăm đơn vị và bảy phần nghìn" viết là:',
        type: 'choice',
        options: ['15,7', '15,07', '15,007', '15,0007'],
        correctAnswer: '15,007',
        difficulty: 'hard',
        explanation: {
          rule: 'Hàng phần nghìn nằm ở vị trí thứ 3 sau dấu phẩy.',
          stepByStep: [
            'Phần nguyên: 15.',
            'Hàng phần mười và hàng phần trăm không có nên viết là 00.',
            'Hàng phần nghìn là 7.',
            'Ghép lại được: 15,007.'
          ],
          tips: 'Hãy đếm: vị trí 1 là phần mười, vị trí 2 là phần trăm, vị trí 3 là phần nghìn!'
        }
      },
      {
        id: 'rw6',
        topicId: 'read-write',
        prompt: 'Số thập phân 0,305 được đọc đúng là:',
        type: 'choice',
        options: [
          'Không phẩy ba trăm linh năm',
          'Không phẩy ba mươi lăm',
          'Ba trăm linh năm',
          'Không phẩy ba không năm mươi'
        ],
        correctAnswer: 'Không phẩy ba trăm linh năm',
        difficulty: 'medium',
        explanation: {
          rule: 'Cách đọc số thập phân có chữ số 0 ở phần thập phân.',
          stepByStep: [
            'Phần nguyên: 0 đọc là "Không".',
            'Dấu phẩy đọc là "phẩy".',
            'Phần thập phân: 305 đọc là "ba trăm linh năm".',
            'Vậy đọc là: "Không phẩy ba trăm linh năm".'
          ]
        }
      },
      {
        id: 'rw7',
        topicId: 'read-write',
        prompt: 'Viết số thập phân: "Năm trăm linh hai phẩy ba mươi tư"',
        type: 'fill',
        correctAnswer: '502,34',
        difficulty: 'medium',
        explanation: {
          rule: 'Chuyển lời đọc thành dạng số.',
          stepByStep: [
            'Năm trăm linh hai = 502.',
            'phẩy = ,',
            'ba mươi tư = 34.',
            'Viết số: 502,34.'
          ]
        }
      },
      {
        id: 'rw8',
        topicId: 'read-write',
        prompt: 'Số "Tám đơn vị, chín phần trăm" được viết là:',
        type: 'choice',
        options: ['8,09', '8,9', '8,009', '89,0'],
        correctAnswer: '8,09',
        difficulty: 'easy',
        explanation: {
          rule: 'Hàng phần trăm đứng ở vị trí thứ hai sau dấu phẩy.',
          stepByStep: [
            'Tám đơn vị: 8,',
            'Chín phần trăm: chữ số 9 đứng ở hàng phần trăm, hàng phần mười là 0.',
            'Viết là: 8,09.'
          ]
        }
      },
      {
        id: 'rw9',
        topicId: 'read-write',
        prompt: 'Số thập phân 12,045 được đọc là:',
        type: 'choice',
        options: [
          'Mười hai phẩy không trăm bốn mươi lăm',
          'Mười hai phẩy bốn mươi lăm',
          'Mười hai phẩy bốn trăm linh năm',
          'Một trăm hai mươi phẩy bốn lăm'
        ],
        correctAnswer: 'Mười hai phẩy không trăm bốn mươi lăm',
        difficulty: 'medium',
        explanation: {
          rule: 'Đọc số có chữ số 0 ở hàng phần mười.',
          stepByStep: [
            'Phần nguyên: Mười hai.',
            'Phần thập phân: 045 đọc là "không trăm bốn mươi lăm".',
            'Đọc cả số là: Mười hai phẩy không trăm bốn mươi lăm.'
          ]
        }
      },
      {
        id: 'rw10',
        topicId: 'read-write',
        prompt: 'Viết số thập phân: "Bảy mươi sáu phẩy không trăm linh chín"',
        type: 'fill',
        correctAnswer: '76,009',
        difficulty: 'hard',
        explanation: {
          rule: 'Phần thập phân có 3 chữ số: 009.',
          stepByStep: [
            'Bảy mươi sáu = 76.',
            'không trăm linh chín = 009.',
            'Kết quả: 76,009.'
          ]
        }
      }
    ]
  },
  {
    id: 'comparison',
    title: 'So Sánh Các Số Thập Phân',
    shortTitle: 'So sánh số TP',
    description: 'Quy tắc so sánh phần nguyên trước, so sánh lần lượt các hàng phần thập phân từ trái sang phải.',
    iconName: 'ArrowUpDown',
    color: 'violet',
    theory: {
      summary: 'So sánh phần nguyên trước. Nếu phần nguyên bằng nhau, ta so sánh từng hàng ở phần thập phân từ trái sang phải.',
      points: [
        'Bước 1: So sánh phần nguyên. Số nào có phần nguyên lớn hơn thì số đó lớn hơn (Ví dụ: 9,2 > 8,99).',
        'Bước 2: Nếu phần nguyên bằng nhau, so sánh hàng phần mười. Số nào có hàng phần mười lớn hơn thì lớn hơn.',
        'Bước 3: Nếu hàng phần mười bằng nhau, tiếp tục so sánh hàng phần trăm, hàng phần nghìn...',
        'Lưu ý: Không đếm số lượng chữ số sau dấu phẩy để quyết định số lớn hơn! (Ví dụ: 0,5 lớn hơn 0,499 vì 5 phần mười > 4 phần mười).'
      ],
      examples: [
        { expression: '8,3 và 7,99', meaning: '8 > 7 nên 8,3 > 7,99' },
        { expression: '12,56 và 12,7', meaning: 'Phần nguyên 12 = 12. Hàng phần mười: 5 < 7 nên 12,56 < 12,7' },
        { expression: '4,09 và 4,090', meaning: '4,09 = 4,090 (hai số bằng nhau)' }
      ]
    },
    questions: [
      {
        id: 'cp1',
        topicId: 'comparison',
        prompt: 'Điền dấu thích hợp vào chỗ chấm: 8,7 ... 8,69',
        type: 'compare',
        options: ['>', '<', '='],
        correctAnswer: '>',
        difficulty: 'medium',
        explanation: {
          rule: 'So sánh phần nguyên trước, sau đó so sánh hàng phần mười.',
          stepByStep: [
            'Phần nguyên của hai số đều là 8 (bằng nhau).',
            'Xét hàng phần mười: 8,7 có chữ số hàng phần mười là 7; 8,69 có chữ số hàng phần mười là 6.',
            'Vì 7 > 6 nên 8,7 > 8,69.'
          ],
          tips: 'Cẩn thận bẫy: 8,69 có 2 chữ số sau dấu phẩy nhưng vẫn nhỏ hơn 8,7 (vì 8,7 = 8,70 mà 70 > 69)!'
        }
      },
      {
        id: 'cp2',
        topicId: 'comparison',
        prompt: 'Điền dấu thích hợp: 5,42 ... 5,420',
        type: 'compare',
        options: ['>', '<', '='],
        correctAnswer: '=',
        difficulty: 'easy',
        explanation: {
          rule: 'Hai số thập phân bằng nhau khi thêm số 0 ở tận cùng.',
          stepByStep: [
            '5,420 có thêm chữ số 0 ở tận cùng bên phải phần thập phân so với 5,42.',
            'Giá trị của hai số thập phân này là hoàn toàn bằng nhau: 5,42 = 5,420.'
          ]
        }
      },
      {
        id: 'cp3',
        topicId: 'comparison',
        prompt: 'Điền dấu thích hợp: 14,08 ... 14,8',
        type: 'compare',
        options: ['>', '<', '='],
        correctAnswer: '<',
        difficulty: 'medium',
        explanation: {
          rule: 'So sánh hàng phần mười.',
          stepByStep: [
            'Phần nguyên: 14 = 14.',
            'Hàng phần mười của 14,08 là 0.',
            'Hàng phần mười của 14,8 là 8.',
            'Vì 0 < 8 nên 14,08 < 14,8.'
          ]
        }
      },
      {
        id: 'cp4',
        topicId: 'comparison',
        prompt: 'Dãy số nào dưới đây được sắp xếp theo thứ tự từ BÉ đến LỚN?',
        type: 'choice',
        options: [
          '3,45 ; 3,5 ; 3,54 ; 4,01',
          '3,5 ; 3,45 ; 3,54 ; 4,01',
          '4,01 ; 3,54 ; 3,5 ; 3,45',
          '3,45 ; 3,54 ; 3,5 ; 4,01'
        ],
        correctAnswer: '3,45 ; 3,5 ; 3,54 ; 4,01',
        difficulty: 'hard',
        explanation: {
          rule: 'Quy tắc so sánh sắp xếp dãy số thập phân từ bé đến lớn.',
          stepByStep: [
            'Ta có: 3,5 = 3,50.',
            'So sánh các số có phần nguyên là 3: 3,45 < 3,50 < 3,54.',
            'Số 4,01 có phần nguyên là 4 lớn nhất.',
            'Vậy thứ tự đúng từ bé đến lớn là: 3,45 ; 3,5 ; 3,54 ; 4,01.'
          ]
        }
      },
      {
        id: 'cp5',
        topicId: 'comparison',
        prompt: 'Tìm chữ số x thích hợp để: 6,8x5 < 6,815',
        type: 'choice',
        options: ['x = 0', 'x = 1', 'x = 2', 'Không có chữ số nào'],
        correctAnswer: 'x = 0',
        difficulty: 'hard',
        explanation: {
          rule: 'So sánh các hàng tương ứng.',
          stepByStep: [
            'Cả hai số đều có: Phần nguyên là 6, hàng phần mười là 8, hàng phần nghìn là 5.',
            'Để 6,8x5 < 6,815 thì chữ số ở hàng phần trăm x phải nhỏ hơn 1.',
            'Vì x là chữ số nên x < 1 chỉ có thể là x = 0.'
          ]
        }
      },
      {
        id: 'cp6',
        topicId: 'comparison',
        prompt: 'Điền dấu thích hợp: 0,99 ... 1,01',
        type: 'compare',
        options: ['>', '<', '='],
        correctAnswer: '<',
        difficulty: 'easy',
        explanation: {
          rule: 'So sánh phần nguyên trước tiên.',
          stepByStep: [
            'Phần nguyên của 0,99 là 0.',
            'Phần nguyên của 1,01 là 1.',
            'Vì 0 < 1 nên 0,99 < 1,01 ngay lập tức mà không cần xét phần thập phân.'
          ]
        }
      },
      {
        id: 'cp7',
        topicId: 'comparison',
        prompt: 'Trong các số: 5,79 ; 5,8 ; 5,799 ; 5,089 thì số LỚN NHẤT là số nào?',
        type: 'choice',
        options: ['5,8', '5,799', '5,79', '5,089'],
        correctAnswer: '5,8',
        difficulty: 'medium',
        explanation: {
          rule: 'So sánh hàng phần mười.',
          stepByStep: [
            'Các số đều có phần nguyên là 5.',
            'Hàng phần mười: 5,8 có hàng phần mười là 8; trong khi các số còn lại có hàng phần mười là 7 hoặc 0.',
            'Vì 8 là lớn nhất nên số 5,8 là số lớn nhất (5,8 = 5,800).'
          ]
        }
      },
      {
        id: 'cp8',
        topicId: 'comparison',
        prompt: 'Dãy số nào được sắp xếp theo thứ tự từ LỚN đến BÉ?',
        type: 'choice',
        options: [
          '9,2 ; 9,15 ; 9,08 ; 8,99',
          '8,99 ; 9,08 ; 9,15 ; 9,2',
          '9,15 ; 9,2 ; 9,08 ; 8,99',
          '9,2 ; 9,08 ; 9,15 ; 8,99'
        ],
        correctAnswer: '9,2 ; 9,15 ; 9,08 ; 8,99',
        difficulty: 'medium',
        explanation: {
          rule: 'Sắp xếp giảm dần từ lớn đến bé.',
          stepByStep: [
            'Các số có phần nguyên là 9: 9,20 > 9,15 > 9,08.',
            'Số 8,99 có phần nguyên là 8 bé nhất.',
            'Vậy thứ tự từ lớn đến bé đúng là: 9,2 ; 9,15 ; 9,08 ; 8,99.'
          ]
        }
      },
      {
        id: 'cp9',
        topicId: 'comparison',
        prompt: 'Tìm số tự nhiên x biết: 4,7 < x < 5,2',
        type: 'choice',
        options: ['x = 5', 'x = 4', 'x = 6', 'Không có số nào'],
        correctAnswer: 'x = 5',
        difficulty: 'medium',
        explanation: {
          rule: 'Tìm số tự nhiên kẹp giữa hai số thập phân.',
          stepByStep: [
            'Số tự nhiên lớn hơn 4,7 chỉ có thể bắt đầu từ 5, 6, 7...',
            'Đồng thời số đó phải nhỏ hơn 5,2.',
            'Số tự nhiên duy nhất thỏa mãn là x = 5.'
          ]
        }
      },
      {
        id: 'cp10',
        topicId: 'comparison',
        prompt: 'Điền dấu thích hợp: 23,456 ... 23,46',
        type: 'compare',
        options: ['>', '<', '='],
        correctAnswer: '<',
        difficulty: 'hard',
        explanation: {
          rule: 'So sánh hàng phần trăm.',
          stepByStep: [
            'Phần nguyên: 23 = 23.',
            'Hàng phần mười: 4 = 4.',
            'Hàng phần trăm: 23,456 có chữ số 5; 23,46 có chữ số 6.',
            'Vì 5 < 6 nên 23,456 < 23,46 (hay 23,456 < 23,460).'
          ]
        }
      }
    ]
  },
  {
    id: 'equal-decimals',
    title: 'Số Thập Phân Bằng Nhau',
    shortTitle: 'Số TP bằng nhau',
    description: 'Quy tắc thêm hoặc bớt các chữ số 0 ở tận cùng bên phải của phần thập phân.',
    iconName: 'Equal',
    color: 'rose',
    theory: {
      summary: 'Nếu viết thêm hoặc bỏ bớt chữ số 0 ở tận cùng bên phải phần thập phân thì được một số thập phân bằng nó.',
      points: [
        'Nếu viết thêm chữ số 0 vào bên phải phần thập phân của một số thập phân thì được một số thập phân bằng nó.',
        'Nếu một số thập phân có chữ số 0 ở tận cùng bên phải phần thập phân thì khi bỏ chữ số 0 đó đi, ta được một số thập phân bằng nó.',
        'CHÚ Ý QUAN TRỌNG: Chỉ được bỏ số 0 ở TẬN CÙNG bên phải phần thập phân. Tuyệt đối KHÔNG được bỏ số 0 ở giữa (ví dụ 4,05 không bằng 4,5) hoặc ở phần nguyên.'
      ],
      examples: [
        { expression: '0,9', meaning: '= 0,90 = 0,900 = 0,9000 (thêm số 0 vào tận cùng)' },
        { expression: '38,400', meaning: '= 38,40 = 38,4 (bỏ các chữ số 0 tận cùng)' },
        { expression: '5', meaning: '= 5,0 = 5,00 = 5,000 (số tự nhiên có thể viết thành số thập phân)' }
      ]
    },
    questions: [
      {
        id: 'eq1',
        topicId: 'equal-decimals',
        prompt: 'Số thập phân 0,75 bằng với số thập phân nào sau đây?',
        type: 'choice',
        options: ['0,750', '0,705', '0,075', '7,5'],
        correctAnswer: '0,750',
        difficulty: 'easy',
        explanation: {
          rule: 'Quy tắc thêm chữ số 0 vào tận cùng bên phải phần thập phân.',
          stepByStep: [
            'Khi thêm một chữ số 0 vào bên phải tận cùng của phần thập phân ở 0,75, ta được 0,750.',
            'Giá trị của số không hề thay đổi: 0,75 = 0,750.'
          ]
        }
      },
      {
        id: 'eq2',
        topicId: 'equal-decimals',
        prompt: 'Bỏ các chữ số 0 ở tận cùng bên phải phần thập phân của số 45,600 ta được:',
        type: 'choice',
        options: ['45,6', '45,06', '4,56', '456'],
        correctAnswer: '45,6',
        difficulty: 'easy',
        explanation: {
          rule: 'Bỏ bớt chữ số 0 ở tận cùng bên phải phần thập phân.',
          stepByStep: [
            'Số 45,600 có hai chữ số 0 ở tận cùng bên phải phần thập phân.',
            'Bỏ hai chữ số 0 này đi, ta được số thập phân gọn nhất là 45,6.'
          ]
        }
      },
      {
        id: 'eq3',
        topicId: 'equal-decimals',
        prompt: 'Khẳng định sau đây ĐÚNG hay SAI: "3,08 = 3,80"?',
        type: 'choice',
        options: ['Sai', 'Đúng'],
        correctAnswer: 'Sai',
        difficulty: 'medium',
        explanation: {
          rule: 'Không được bỏ hoặc hoán đổi chữ số 0 ở giữa hàng phần mười và hàng phần trăm.',
          stepByStep: [
            '3,08 có chữ số 0 ở hàng phần mười và chữ số 8 ở hàng phần trăm (giá trị 3 và [frac:8:100]).',
            '3,80 có chữ số 8 ở hàng phần mười (giá trị 3 và [frac:8:10]).',
            'Vì [frac:8:100] khác [frac:8:10] nên 3,08 KHÔNG THỂ BẰNG 3,80. Khẳng định trên là SAI.'
          ],
          tips: 'Chỉ được thêm/bớt số 0 ở TẬN CÙNG bên phải phần thập phân, không được chuyển vị trí số 0!'
        }
      },
      {
        id: 'eq4',
        topicId: 'equal-decimals',
        prompt: 'Viết số tự nhiên 12 dưới dạng số thập phân có 2 chữ số ở phần thập phân:',
        type: 'fill',
        correctAnswer: '12,00',
        difficulty: 'medium',
        explanation: {
          rule: 'Mọi số tự nhiên đều có thể viết thành số thập phân.',
          stepByStep: [
            'Số tự nhiên 12 có phần nguyên là 12.',
            'Để có 2 chữ số ở phần thập phân mà giá trị không đổi, ta thêm dấu phẩy và hai chữ số 0.',
            'Kết quả là: 12,00.'
          ]
        }
      },
      {
        id: 'eq5',
        topicId: 'equal-decimals',
        prompt: 'Trong các số thập phân sau, số nào KHÔNG BẰNG các số còn lại: 6,400 ; 6,40 ; 6,04 ; 6,4?',
        type: 'choice',
        options: ['6,04', '6,400', '6,40', '6,4'],
        correctAnswer: '6,04',
        difficulty: 'medium',
        explanation: {
          rule: 'Phát hiện số thập phân khác biệt.',
          stepByStep: [
            'Ta có: 6,400 = 6,40 = 6,4 (đều có hàng phần mười là 4).',
            'Riêng số 6,04 có hàng phần mười là 0, hàng phần trăm là 4.',
            'Do đó số 6,04 nhỏ hơn và không bằng các số còn lại.'
          ]
        }
      },
      {
        id: 'eq6',
        topicId: 'equal-decimals',
        prompt: 'Viết số thập phân 0,5 dưới dạng số thập phân có 3 chữ số ở phần thập phân:',
        type: 'fill',
        correctAnswer: '0,500',
        difficulty: 'easy',
        explanation: {
          rule: 'Thêm chữ số 0 vào tận cùng bên phải phần thập phân.',
          stepByStep: [
            '0,5 hiện có 1 chữ số ở phần thập phân.',
            'Để có 3 chữ số mà giá trị bằng nó, ta thêm 2 chữ số 0 vào bên phải tận cùng.',
            'Ta được: 0,500.'
          ]
        }
      },
      {
        id: 'eq7',
        topicId: 'equal-decimals',
        prompt: 'Trong các số: 0,80 ; 0,08 ; 0,800 ; 0,8 có bao nhiêu số bằng nhau?',
        type: 'choice',
        options: ['3 số', '2 số', '4 số', 'Không có số nào'],
        correctAnswer: '3 số',
        difficulty: 'medium',
        explanation: {
          rule: 'Xác định các số thập phân bằng nhau.',
          stepByStep: [
            '0,8 = 0,80 = 0,800 (có 3 số bằng nhau).',
            'Riêng 0,08 có giá trị là 8 phần trăm nên không bằng 3 số trên.'
          ]
        }
      },
      {
        id: 'eq8',
        topicId: 'equal-decimals',
        prompt: 'Rút gọn số thập phân 108,090 bằng cách bỏ chữ số 0 ở tận cùng bên phải ta được:',
        type: 'choice',
        options: ['108,09', '108,9', '18,09', '10809'],
        correctAnswer: '108,09',
        difficulty: 'medium',
        explanation: {
          rule: 'Chỉ được bỏ chữ số 0 ở tận cùng bên phải phần thập phân.',
          stepByStep: [
            'Số 108,090 có một chữ số 0 ở tận cùng bên phải phần thập phân.',
            'Bỏ chữ số 0 này đi, ta được 108,09.',
            'Tuyệt đối không được bỏ chữ số 0 ở hàng chục (108) hoặc chữ số 0 ở hàng phần mười (,09)!'
          ]
        }
      },
      {
        id: 'eq9',
        topicId: 'equal-decimals',
        prompt: 'Khẳng định sau ĐÚNG hay SAI: "Khi viết thêm hai chữ số 0 vào bên phải số 2,5 ta được 2,500 và 2,5 = 2,500"?',
        type: 'choice',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Đúng',
        difficulty: 'easy',
        explanation: {
          rule: 'Thêm chữ số 0 vào tận cùng bên phải không làm thay đổi giá trị của số thập phân.',
          stepByStep: [
            'Theo tính chất: 2,5 = 2,50 = 2,500.',
            'Khẳng định trên là hoàn toàn chính xác.'
          ]
        }
      },
      {
        id: 'eq10',
        topicId: 'equal-decimals',
        prompt: 'Số tự nhiên nào bằng số thập phân 7,00?',
        type: 'fill',
        correctAnswer: '7',
        difficulty: 'easy',
        explanation: {
          rule: 'Bỏ tất cả chữ số 0 ở phần thập phân khi phần thập phân toàn chữ số 0.',
          stepByStep: [
            'Số 7,00 có phần thập phân toàn là chữ số 0.',
            'Bỏ dấu phẩy và các chữ số 0 tận cùng, ta được số tự nhiên 7.'
          ]
        }
      }
    ]
  },
  {
    id: 'measurement-conversion',
    title: 'Viết Số Đo Đại Lượng Dưới Dạng Số Thập Phân',
    shortTitle: 'Đổi đơn vị đo',
    description: 'Chuyển đổi số đo độ dài (m, dm, cm, mm), khối lượng (tấn, tạ, kg, g) và diện tích (m², dm², ha) thành số thập phân.',
    iconName: 'Scale',
    color: 'teal',
    theory: {
      summary: 'Dựa vào bảng đơn vị đo để viết số đo dưới dạng hỗn số chứa phân số thập phân, sau đó viết thành số thập phân.',
      points: [
        'Độ dài & Khối lượng: Hai đơn vị liền nhau gấp/kém nhau 10 lần (1m = 10dm, 1dm = 0,1m; 1 tấn = 10 tạ = 1000kg).',
        'Diện tích: Hai đơn vị liền nhau gấp/kém nhau 100 lần (1m² = 100dm² = 0,01 dam²; 1ha = 10.000m²). Mỗi hàng đơn vị diện tích ứng với 2 chữ số!',
        'Cách làm: Giữ nguyên phần đơn vị lớn làm phần nguyên, chuyển đổi phần đơn vị bé thành phân số thập phân rồi viết số thập phân.'
      ],
      table: {
        headers: ['Đại lượng', 'Mối quan hệ giữa 2 đơn vị liền kề', 'Ví dụ'],
        rows: [
          ['Độ dài (km, m, cm...)', 'Gấp / kém nhau 10 lần (1 chữ số mỗi hàng)', '3m 5dm = 3,5m ; 4m 7cm = 4,07m'],
          ['Khối lượng (tấn, kg, g...)', 'Gấp / kém nhau 10 lần (riêng tấn -> kg là 1000 lần)', '2 tấn 50kg = 2,05 tấn ; 5kg 6g = 5,006kg'],
          ['Diện tích (m², dm², ha...)', 'Gấp / kém nhau 100 lần (2 chữ số mỗi hàng)', '7m² 25dm² = 7,25m² ; 4m² 5dm² = 4,05m²']
        ]
      },
      examples: [
        { expression: '4m 25cm', meaning: '= [mixed:4:25:100] m = 4,25m' },
        { expression: '3m 7cm', meaning: '= [mixed:3:7:100] m = 3,07m (chú ý: 7cm = 0,07m)' },
        { expression: '5 tấn 250kg', meaning: '= [mixed:5:250:1000] tấn = 5,25 tấn' },
        { expression: '8m² 5dm²', meaning: '= [mixed:8:5:100] m² = 8,05m² (diện tích mỗi hàng 2 chữ số)' }
      ]
    },
    questions: [
      {
        id: 'mc1',
        topicId: 'measurement-conversion',
        prompt: 'Viết số đo độ dài 3m 5dm dưới dạng số thập phân có đơn vị là mét:',
        type: 'choice',
        options: ['3,5m', '3,05m', '35m', '0,35m'],
        correctAnswer: '3,5m',
        difficulty: 'easy',
        explanation: {
          rule: 'Quan hệ giữa mét và đề-xi-mét (1m = 10dm, 1dm = [frac:1:10]m).',
          stepByStep: [
            'Ta có: 5dm = [frac:5:10]m = 0,5m.',
            '3m 5dm = 3m + 0,5m = 3,5m.'
          ]
        }
      },
      {
        id: 'mc2',
        topicId: 'measurement-conversion',
        prompt: 'Viết số đo độ dài 4m 7cm dưới dạng số thập phân có đơn vị là mét:',
        type: 'choice',
        options: ['4,7m', '4,07m', '4,007m', '47m'],
        correctAnswer: '4,07m',
        difficulty: 'medium',
        explanation: {
          rule: 'Quan hệ giữa mét và xăng-ti-mét (1m = 100cm, 1cm = [frac:1:100]m).',
          stepByStep: [
            '1m = 100cm nên 7cm = [frac:7:100]m = 0,07m.',
            'Do đó 4m 7cm = 4m + 0,07m = 4,07m.'
          ],
          tips: 'Cực kỳ hay nhầm: Nhiều bạn viết nhầm thành 4,7m (nhưng 4,7m là 4m 7dm = 4m 70cm)!'
        }
      },
      {
        id: 'mc3',
        topicId: 'measurement-conversion',
        prompt: 'Viết số đo khối lượng 2 tấn 50kg dưới dạng số thập phân có đơn vị là tấn:',
        type: 'choice',
        options: ['2,5 tấn', '2,05 tấn', '2,005 tấn', '2,500 tấn'],
        correctAnswer: '2,05 tấn',
        difficulty: 'medium',
        explanation: {
          rule: 'Quan hệ giữa tấn và ki-lô-gam (1 tấn = 1000kg).',
          stepByStep: [
            '1 tấn = 1000kg nên 50kg = [frac:50:1000] tấn = 0,050 tấn = 0,05 tấn.',
            '2 tấn 50kg = 2 tấn + 0,05 tấn = 2,05 tấn.'
          ],
          tips: '2,5 tấn là 2 tấn 500kg. Còn 50kg chỉ là 0,05 tấn thôi em nhé!'
        }
      },
      {
        id: 'mc4',
        topicId: 'measurement-conversion',
        prompt: 'Viết số đo 5kg 6g dưới dạng số thập phân có đơn vị là ki-lô-gam:',
        type: 'fill',
        correctAnswer: '5,006',
        difficulty: 'hard',
        explanation: {
          rule: 'Quan hệ giữa kg và gam (1kg = 1000g, 1g = [frac:1:1000]kg).',
          stepByStep: [
            '6g = [frac:6:1000]kg = 0,006kg.',
            '5kg 6g = 5kg + 0,006kg = 5,006kg.'
          ]
        }
      },
      {
        id: 'mc5',
        topicId: 'measurement-conversion',
        prompt: 'Viết số đo diện tích 7m² 25dm² dưới dạng số thập phân có đơn vị là mét vuông:',
        type: 'choice',
        options: ['7,25 m²', '7,025 m²', '72,5 m²', '7,250 m²'],
        correctAnswer: '7,25 m²',
        difficulty: 'easy',
        explanation: {
          rule: 'Quan hệ đơn vị đo diện tích m² và dm² (1m² = 100dm²).',
          stepByStep: [
            '1m² = 100dm² nên 25dm² = [frac:25:100]m² = 0,25m².',
            '7m² 25dm² = 7 + 0,25 = 7,25 m².'
          ]
        }
      },
      {
        id: 'mc6',
        topicId: 'measurement-conversion',
        prompt: 'Viết số đo diện tích 9m² 4dm² dưới dạng số thập phân có đơn vị là mét vuông:',
        type: 'choice',
        options: ['9,4 m²', '9,04 m²', '9,004 m²', '94 m²'],
        correctAnswer: '9,04 m²',
        difficulty: 'medium',
        explanation: {
          rule: 'Mỗi đơn vị diện tích liền kề gấp/kém nhau 100 lần (cần 2 chữ số thập phân).',
          stepByStep: [
            '1m² = 100dm² nên 4dm² = [frac:4:100]m² = 0,04m².',
            'Vậy 9m² 4dm² = 9,04 m².'
          ],
          tips: 'Rất nhiều học sinh nhầm thành 9,4 m². Nhớ rằng 9,4 m² = 9m² 40dm²!'
        }
      },
      {
        id: 'mc7',
        topicId: 'measurement-conversion',
        prompt: 'Viết số đo diện tích 5m² 18dm² dưới dạng số thập phân có đơn vị là mét vuông:',
        type: 'choice',
        options: ['5,18 m²', '5,018 m²', '51,8 m²', '0,518 m²'],
        correctAnswer: '5,18 m²',
        difficulty: 'medium',
        explanation: {
          rule: 'Quan hệ đơn vị đo diện tích mét vuông và đề-xi-mét vuông (1m² = 100dm²).',
          stepByStep: [
            '1m² = 100dm² nên 18dm² = [frac:18:100]m² = 0,18m².',
            '5m² 18dm² = 5m² + 0,18m² = 5,18 m².'
          ]
        }
      },
      {
        id: 'mc8',
        topicId: 'measurement-conversion',
        prompt: 'Điền số thích hợp: 856m = ... km',
        type: 'fill',
        correctAnswer: '0,856',
        difficulty: 'medium',
        explanation: {
          rule: '1km = 1000m, nên 1m = [frac:1:1000]km = 0,001km.',
          stepByStep: [
            '856m = [frac:856:1000] km = 0,856 km.'
          ]
        }
      },
      {
        id: 'mc9',
        topicId: 'measurement-conversion',
        prompt: 'Viết số đo khối lượng 12 tấn 6 tạ dưới dạng số thập phân có đơn vị là tấn:',
        type: 'choice',
        options: ['12,6 tấn', '12,06 tấn', '1,26 tấn', '126 tấn'],
        correctAnswer: '12,6 tấn',
        difficulty: 'easy',
        explanation: {
          rule: 'Quan hệ giữa tấn và tạ (1 tấn = 10 tạ).',
          stepByStep: [
            '6 tạ = [frac:6:10] tấn = 0,6 tấn.',
            '12 tấn 6 tạ = 12 + 0,6 = 12,6 tấn.'
          ]
        }
      },
      {
        id: 'mc10',
        topicId: 'measurement-conversion',
        prompt: 'Viết số đo diện tích 3m² 8cm² dưới dạng số thập phân có đơn vị là mét vuông:',
        subPrompt: 'Biết rằng 1m² = 10 000 cm²',
        type: 'choice',
        options: ['3,0008 m²', '3,08 m²', '3,008 m²', '3,8 m²'],
        correctAnswer: '3,0008 m²',
        difficulty: 'hard',
        explanation: {
          rule: '1m² = 100dm² = 10 000 cm² (mỗi bước diện tích gấp 100 lần, cm² cách m² bốn chữ số!).',
          stepByStep: [
            '8cm² = [frac:8:10000] m² = 0,0008 m².',
            '3m² 8cm² = 3m² + 0,0008 m² = 3,0008 m².'
          ],
          tips: 'Ghi nhớ: Từ m² sang cm² qua dm² (2 số) rồi cm² (2 số) = 4 chữ số thập phân!'
        }
      }
    ]
  }
];

// Helper to get total number of questions across all topics
export const TOTAL_QUESTIONS_COUNT = TOPICS.reduce((acc, t) => acc + t.questions.length, 0);

// Helper to generate a 30-question mixed final exam challenge (5 questions from each of 6 topics)
export function generateChallengeExam(): import('../types/math').Question[] {
  const mixed: import('../types/math').Question[] = [];
  TOPICS.forEach((t) => {
    // Pick 5 questions from each topic (5 * 6 = 30)
    const shuffled = [...t.questions].sort(() => 0.5 - Math.random());
    mixed.push(...shuffled.slice(0, 5));
  });
  return mixed.sort(() => 0.5 - Math.random());
}

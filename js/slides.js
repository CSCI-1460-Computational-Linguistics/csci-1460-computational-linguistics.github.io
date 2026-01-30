/**
 * Note on data fields:
 * - num: lecture number (null if no number)
 * - date: date string
 * - title: title string (if html_title is not provided)
 * - html_title: optional HTML string for title (for links, note: IM Fell English only has one font weight)
 * - url_slides: URL string for slides (null if no link)
 * - url_recording: URL string for recording (null if no link)
 * - url_quiz: URL string for quiz (null if no link)
 * - quiz_num: quiz number
 * 
 * If none of the URLs are provided (all null), the row is grayed out.
 * 
 * Examples:
 * ```javascript
 * {
 *   'num': 8,
 *   'date': '3 Oct',
 *   'title': 'Neural Architectures Part 2: LSTMs and Transformers',
 *   'url_slides': 'https://drive.google.com/file/d/1nLGGQusCVVliD0aXJ2xd6qvSwDIerVGi/view?usp=drive_link',
 *   'url_recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7cb7e1b8-9394-43c5-9336-b1d900e869f8',
 *   'url_quiz': 'https://forms.gle/p943T5jDXrxJu8QTA',
 *   'quiz_num': 8,
 * },
 * {
 *   'num': 9,
 *   'date': '8 Oct',
 *   'title': 'Guest Lecture: Will Louis',
 *   'html_title': 'Guest Lecture: <a href="https://faculty.washington.edu/wlewis2/" target="_blank">Will Louis</a> <a href="https://edstem.org/us/courses/65453/discussion/5438447" target="_blank">[ZOOM]</a>',
 *   'url_slides': null,
 *   'url_recording': 'https://brown.zoom.us/rec/share/0v639nIS6uqSWXOwQreIoWKfv-pObG-4sqw49NjjA0ceYIMwOR30SPb7QshjX5zq.07ltRtsk74MBV2PP',
 *   'url_quiz': null,
 *   'quiz_num': null,
 * }
 * ```
 */
const lectures = [
    {
        'num': 0,
        'date': '22 Jan',
        'title': 'Intro Lecture, Tasks, Benchmarks',
        'url_slides': "https://drive.google.com/file/d/12stm9S9m8IQKonCJnfqdqX8t4SA5dlrJ/view",
        'url_recording': "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a7af2cac-fa26-4d6c-ac95-b3d4010cf7e5",
        'url_quiz': "https://forms.gle/o9gcwsQNZpMgoaTx5",
        'quiz_num': 0,
    },
    {
        'num': 1,
        'date': '27 Jan',
        'title': 'Text Classifiers, BOW Models',
        'url_slides': "https://drive.google.com/file/d/1AM5ipZIXwB4tTCm8WaVfqHJFPSTl4E8G/view",
        'url_recording': "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f12e2d48-6115-4289-95f9-b3d4010cf858",
        'url_quiz': "https://forms.gle/EpBt7swkdVSu6e8a6",
        'quiz_num': 1,
    },
    {
        'num': 2,
        'date': '29 Jan',
        'title': 'BOW Text Classfiers Continued',
        'url_slides': "https://drive.google.com/file/d/182fjsp1EA0deqRR4lMAssP19N6bEu31N/view?usp=drive_link",
        'url_recording': "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=dc45e0d0-bbb9-4922-a227-b3d4010cf875",
        'url_quiz': null,
        'quiz_num': "Look at Quiz 0 and Quiz 1",
    },
    // {
    //     'num': 3,
    //     'date': '3 Feb',
    //     'title': 'Distributional Hypothesis & Word Vectors',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': null,
    //     'date': '5 Feb',
    //     'title': 'No Class',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 4,
    //     'date': '10 Feb',
    //     'title': 'Dimensionality Reduction & Word Embeddings',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 5,
    //     'date': '12 Feb',
    //     'title': 'Topic Modeling',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': null,
    //     'date': '17 Feb',
    //     'title': 'No Class',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 6,
    //     'date': '19 Feb',
    //     'title': 'Ngram Language Models and Decoding Algos',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 7,
    //     'date': '24 Feb',
    //     'title': 'Syntax: Grammars and Parsing',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 8,
    //     'date': '26 Feb',
    //     'title': 'Semantics: Semantic Representations and Parsing',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 9,
    //     'date': '3 Mar',
    //     'title': 'Review Day',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': null,
    //     'date': '5 Mar',
    //     // 'title': 'Midterm',
    //     'html_title': '<b>Midterm</b>',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 10,
    //     'date': '10 Mar',
    //     'title': 'MLPs, RNNs',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 11,
    //     'date': '12 Mar',
    //     'title': 'Transformers and NMT',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 12,
    //     'date': '17 Mar',
    //     'title': 'Transformers and LLMs',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': null,
    //     'date': '19 Mar',
    //     'title': 'No Class',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': null,
    //     'date': '24 Mar',
    //     'title': 'No Class',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': null,
    //     'date': '26 Mar',
    //     'title': 'No Class',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 13,
    //     'date': '31 Mar',
    //     'title': 'Pretraining',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 14,
    //     'date': '2 Apr',
    //     'title': 'Post Training Part 1: SFT',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 15,
    //     'date': '7 Apr',
    //     'title': 'Post Training Part 2: RLHF and “Alignment”',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 16,
    //     'date': '9 Apr',
    //     'title': 'Prompts and In Context Learning',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 17,
    //     'date': '14 Apr',
    //     'title': 'LLM evaluations and the race for “AGI”',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': 18,
    //     'date': '16 Apr',
    //     'title': 'Interpretability and the Science of LLMs',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // },
    // {
    //     'num': null,
    //     'date': '21 Apr',
    //     'title': 'Review Day',
    //     'url_slides': null,
    //     'url_recording': null,
    //     'url_quiz': null,
    //     'quiz_num': 0,
    // }
];

function loadTable() {
    const table = document.getElementById('slides-table');
    const tbody = table?.querySelector('tbody');
    if (!table || !tbody) {
        console.warn('Could not find table with id slides-table');
        return;
    }
    // remove existing rows
    tbody.innerHTML = '';

    for (let i = 0; i < lectures.length; i++) {
        const lecture = lectures[i];
        const tr = document.createElement('tr');

        // Number
        const tdNum = document.createElement('td');
        tdNum.textContent = lecture.num !== null ? lecture.num : '';
        tr.appendChild(tdNum);

        // Date
        const tdDate = document.createElement('td');
        tdDate.textContent = lecture.date;
        tr.appendChild(tdDate);

        // Title
        const tdTitle = document.createElement('td');
        if (lecture.html_title) {
            tdTitle.classList.add('out');
            tdTitle.innerHTML = lecture.html_title;
        } else {
            tdTitle.textContent = lecture.title;
        }
        tr.appendChild(tdTitle);

        // const useGray = lecture.url_slides === null && 
        //                 lecture.url_recording === null && 
        //                 lecture.url_quiz === null;
        // if (useGray) {
        //     tr.classList.add('unreleased');
        // }
        const tdSlides = createOutLinkTd('Slides', lecture.url_slides);
        tr.appendChild(tdSlides);

        const tdRecording = createOutLinkTd('Recording', lecture.url_recording);
        tr.appendChild(tdRecording);

        const tdQuiz = document.createElement('td');

        if (lecture.url_quiz) {
            tdQuiz.classList.add('out');
            const a = document.createElement('a');
            a.href = lecture.url_quiz;
            a.target = "_blank";
            a.textContent = `Quiz ${lecture.quiz_num}`;
            tdQuiz.appendChild(a);
        } else if (lecture.quiz_num) {
            // plain text message (no link)
            tdQuiz.classList.add('out');
            tdQuiz.textContent = lecture.quiz_num;
        }
        tr.appendChild(tdQuiz);


        // const quizText = lecture.quiz_num !== null ? `Quiz ${lecture.quiz_num}` : 'Quiz';
        // const tdQuiz = createOutLinkTd(quizText, lecture.url_quiz);
        // tr.appendChild(tdQuiz);
        tbody.appendChild(tr);
    }
}

const createOutLinkTd = (text, url) => {
    if (url === null) {
        return document.createElement('td');
    }
    const td = document.createElement('td');
    td.classList.add('out');
    const a = document.createElement('a');
    a.href = url;
    a.target = "_blank";
    a.textContent = text;
    td.appendChild(a);
    return td;
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTable);
} else {
    loadTable();
}

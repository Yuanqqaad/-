// 定义题目数组，每个题目包含类型、问题、选项（如果是选择题）和答案
const questions = [
    {
        type: "填空题",
        question: "党的二十大报告指出，实践告诉我们，中国共产党为什么能，中国特色社会主义为什么好，归根到底是马克思主义行，是中国化时代化的马克思主义行。",
        answer: "马克思主义"
    },
    {
        type: "单项选择题",
        question: "党的二十大报告指出，全党同志务必（  ），坚定历史自信，增强历史主动，谱写新时代中国特色社会主义更加绚丽的华章。",
        options: ["不忘初心、牢记使命", "谦虚谨慎、艰苦奋斗", "敢于斗争、善于斗争", "以上都是"],
        answer: "以上都是"
    },
    {
        type: "判断题",
        question: "党的最高理想和最终目标是实现社会主义现代化。（  ）",
        answer: "错误"
    },
    {
        type: "填空题",
        question: "党的二十大报告指出，人民性是马克思主义的本质属性，党的理论是来自人民、为了人民、造福人民的理论。",
        answer: "人民性"
    },
    {
        type: "单项选择题",
        question: "党的二十大报告指出，发展是党执政兴国的第一要务。（  ）",
        options: ["正确", "错误"],
        answer: "正确"
    },
    {
        type: "判断题",
        question: "中国特色社会主义事业“五位一体”总体布局是指：全面推进经济建设、政治建设、文化建设、社会建设、生态文明建设。（  ）",
        answer: "正确"
    },
    {
        type: "填空题",
        question: "党的二十大报告指出，国家安全是民族复兴的根基，_____是国家强盛的前提。",
        answer: "社会稳定"
    },
    {
        type: "单项选择题",
        question: "党的二十大报告指出，全党必须牢记，全面从严治党永远在路上，党的（  ）永远在路上。",
        options: ["自我革命", "自我革新", "自我完善", "自我提高"],
        answer: "自我革命"
    },
    {
        type: "判断题",
        question: "经过不懈努力，党找到了自我革命这一跳出治乱兴衰历史周期率的第二个答案。（  ）",
        answer: "正确"
    },
    {
        type: "填空题",
        question: "党的二十大报告指出，我们必须坚持（  ）在意识形态领域指导地位的根本制度。",
        answer: "马克思主义"
    },
    {
        type: "单项选择题",
        question: "党的二十大报告指出，人民民主是社会主义的生命，是全面建设社会主义现代化国家的（  ）。",
        options: ["重要目标", "重要保障", "内在要求", "必然条件"],
        answer: "重要保障"
    },
    {
        type: "判断题",
        question: "党的二十大报告指出，全党必须坚持和加强党的全面领导。（  ）",
        answer: "正确"
    },
    {
        type: "填空题",
        question: "党的二十大报告指出，我们要坚持（  ）在经济建设、政治建设、文化建设、社会建设、生态文明建设中的指导地位。",
        answer: "中国特色社会主义"
    },
    {
        type: "单项选择题",
        question: "党的二十大报告指出，全党必须坚持（  ）的发展思想。",
        options: ["以经济建设为中心", "以人民为中心", "以改革开放为中心", "以科技创新为中心"],
        answer: "以人民为中心"
    },
    {
        type: "判断题",
        question: "党的二十大报告指出，全党必须坚持新发展理念，推动高质量发展。（  ）",
        answer: "正确"
    },
    {
        type: "填空题",
        question: "党的二十大报告指出，国家安全是民族复兴的根基，_____是国家强盛的前提。",
        answer: "社会稳定"
    },
    {
        type: "单项选择题",
        question: "党的二十大报告指出，全党必须坚持（  ）的社会主义现代化道路。",
        options: ["中国特色社会主义", "改革开放", "科技创新", "可持续发展"],
        answer: "中国特色社会主义"
    },
    {
        type: "判断题",
        question: "党的二十大报告指出，全党必须坚持和加强党的全面领导，确保党在新时代新征程上更加坚强有力。（  ）",
        answer: "正确"
    },
    {
        type: "填空题",
        question: "党的二十大报告指出，全党必须坚持（  ）发展思想，不断实现发展为了人民、发展依靠人民、发展成果由人民共享。",
        answer: "以人民为中心"
    },
    {
        type: "单项选择题",
        question: "党的二十大报告指出，全党必须坚持（  ）在意识形态领域的指导地位。",
        options: ["马克思主义", "中国特色社会主义", "社会主义核心价值观", "习近平新时代中国特色社会主义思想"],
        answer: "马克思主义"
    },
    {
        type: "判断题",
        question: "党的二十大报告指出，全党必须坚持新发展理念，推动高质量发展。（  ）",
        answer: "正确"
    }
];

// 定义全局变量
let currentQuestionIndex = 0; // 当前题目的索引
let correctCount = 0; // 答对的题目数
let wrongQuestions = []; // 答错的题目

// 获取页面元素
const questionContainer = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const answerForm = document.getElementById("answer-form");
const answerInput = document.getElementById("answer-input");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");
const correctRateEl = document.getElementById("correct-rate");
const resetButton = document.getElementById("reset-button");

// 加载当前题目
function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionEl.innerText = `${currentQuestionIndex + 1}. ${q.type}：${q.question}`;
    optionsEl.innerHTML = "";

    if (q.type === "单项选择题") {
        q.options.forEach(option => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="option" value="${option}">${option}`;
            optionsEl.appendChild(label);
        });
    } else {
        answerInput.style.display = "block"; // 显示输入框
    }

    resultEl.innerText = ""; // 清空结果
    progressEl.innerText = `进度: ${currentQuestionIndex + 1}/${questions.length}`; // 更新进度
    correctRateEl.innerText = `正确率: ${((correctCount / (currentQuestionIndex + 1)) * 100).toFixed(2)}%`; // 更新正确率
}

// 检查答案
function checkAnswer() {
    const q = questions[currentQuestionIndex];
    let userAnswer = "";

    if (q.type === "单项选择题") {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            userAnswer = selectedOption.value;
        }
    } else {
        userAnswer = answerInput.value.trim();
    }

    if (userAnswer === "") {
        alert("请输入答案或选择选项");
        return;
    }

    if (userAnswer === q.answer) {
        resultEl.innerText = "正确！";
        resultEl.classList.add("correct");
        correctCount++;
    } else {
        resultEl.innerText = `错误，正确答案是：${q.answer}`;
        resultEl.classList.add("wrong");
        wrongQuestions.push(q);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "测试完成！";
        optionsEl.innerHTML = "";
        answerInput.style.display = "none";
        answerForm.style.display = "none";
        progressEl.innerText = `进度: ${currentQuestionIndex}/${questions.length}`;
        correctRateEl.innerText = `正确率: ${((correctCount / questions.length) * 100).toFixed(2)}%`;
        resultEl.innerText = `你答对了 ${correctCount} 道题，答错了 ${wrongQuestions.length} 道题。`;

        // 显示错题集
        if (wrongQuestions.length > 0) {
            resultEl.innerText += "\n错题集：";
            wrongQuestions.forEach((q, index) => {
                resultEl.innerText += `\n${index + 1}. ${q.question}（正确答案是：${q.answer}）`;
            });
        }
    }
}

// 提交答案
answerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    checkAnswer();
});

// 重新开始
resetButton.addEventListener("click", function() {
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongQuestions = [];
    loadQuestion();
    answerInput.value = "";
    resultEl.innerText = "";
    progressEl.innerText = `进度: ${currentQuestionIndex + 1}/${questions.length}`;
    correctRateEl.innerText = `正确率: 0%`;
});

// 初始化加载第一题
loadQuestion();
// ========================
// 데이터: 밸런스 게임 질문들
// ========================
const QUESTIONS = [
    { a: "평생 와이파이 무료", b: "평생 배달비 무료" },
    { a: "아침마다 1시간 일찍 일어나기", b: "밤마다 1시간 늦게 자기" },
    { a: "지금 1억 받기", b: "10년 후 10억 확정" },
    { a: "휴대폰 없이 1주일", b: "에어컨 없이 여름 1주일" },
    { a: "평생 치킨 금지", b: "평생 라면 금지" },
    { a: "읽으면 바로 외워지는 능력", b: "한 번 보면 완벽히 그리는 능력" },
    { a: "투명인간 1일 체험", b: "순간이동 1회권" },
    {
        a: "매일 초호화 식사 (살은 그대로 유지)",
        b: "월 1번 해외여행 어디든 무료",
    },
    { a: "모든 언어 완벽하게 말하기", b: "모든 악기 완벽하게 연주하기" },
    {
        a: "연락은 잘하는데 만날 시간은 없음",
        b: "연락은 안 되는데 만나면 항상 함께 있음",
    },
    {
        a: "항상 5분 일찍 도착하는 능력",
        b: "항상 5분 늦어도 아무도 뭐라 안 하는 능력",
    },
    { a: "지각 절대 안 하는 팀원", b: "퇴근 시간 딱 맞춰 끊는 팀원" },
    {
        a: "지금 바로 원하는 곳으로 이사 가능",
        b: "지금 집에서 월세/관리비/대출 0원",
    },
    { a: "상대방 마음을 다 알 수 있음", b: "내 마음을 절대 들키지 않음" },
    { a: "평생 광고 안 보기", b: "유튜브 프리미엄+넷플릭스+디즈니 전부 무료" },
    { a: "하루에 4시간만 자도 안 피곤", b: "아무리 먹어도 살 안 찜" },
    { a: "날씨 항상 내 맘대로", b: "교통 항상 막히지 않음" },
    {
        a: "3분 안에 어디든 이동 가능(쿨타임 24h)",
        b: "시간을 3분만 되돌릴 수 있음(하루 1번)",
    },
    {
        a: "지갑 절대 안 잃어버리는 능력",
        b: "휴대폰 절대 안 잃어버리는 능력",
    },
    { a: "카메라 화질 무조건 인생샷", b: "내 얼굴 무조건 인생얼굴" },
];

// ========================
// DOM 요소
// ========================
const optAEl = document.getElementById("optA");
const optBEl = document.getElementById("optB");
const nextBtn = document.getElementById("nextBtn");
const shareBtn = document.getElementById("shareBtn");
const progressInfo = document.getElementById("progressInfo");
const toastEl = document.getElementById("toast");

// ========================
// 상태
// ========================
let currentIndex = -1;
let used = []; // 이미 보여준 문제 index들

// ========================
// 함수: 문제 뽑기
// ========================
function pickRandomQuestion() {
    // 모든 문제를 한 번씩 다 보여줬다면 초기화
    if (used.length === QUESTIONS.length) {
        used = [];
    }

    // 아직 안 쓴 인덱스 후보
    const candidates = [];
    for (let i = 0; i < QUESTIONS.length; i++) {
        if (!used.includes(i)) {
            candidates.push(i);
        }
    }

    // 후보 중 랜덤
    const randomPos = Math.floor(Math.random() * candidates.length);
    currentIndex = candidates[randomPos];
    used.push(currentIndex);

    renderQuestion();
    renderProgress();
}

// ========================
// 화면 업데이트
// ========================
function renderQuestion() {
    const q = QUESTIONS[currentIndex];
    optAEl.textContent = q.a;
    optBEl.textContent = q.b;
}

function renderProgress() {
    progressInfo.textContent = used.length + " / " + QUESTIONS.length;
}

// ========================
// 공유하기
// ========================
async function onShare() {
    if (currentIndex < 0) return;

    const q = QUESTIONS[currentIndex];
    const text = `밸런스 게임!\n\nA) ${q.a}\nVS\nB) ${q.b}\n\n너는 뭐 고를래?`;

    // 1) Web Share API 가능하면 (모바일 등)
    if (navigator.share) {
        try {
            await navigator.share({
                title: "밸런스 게임",
                text,
            });
            return;
        } catch (err) {
            // 사용자가 취소했거나 에러난 경우 -> 아래 clipboard fallback으로 그냥 진행
        }
    }

    // 2) Clipboard fallback
    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch (err) {
        // 일부 브라우저는 https 환경 아니면 clipboard 안 줄 수도 있음
        // 그런 경우에는 alert로만 안내
        alert("복사할 내용을 직접 가져가 주세요:\n\n" + text);
    }
}

// 간단한 토스트 애니메이션
function showToast() {
    toastEl.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
        toastEl.classList.remove("show");
    }, 1500);
}

// ========================
// 이벤트 연결
// ========================
nextBtn.addEventListener("click", pickRandomQuestion);
shareBtn.addEventListener("click", onShare);

// ========================
// 초기 실행
// ========================
pickRandomQuestion();

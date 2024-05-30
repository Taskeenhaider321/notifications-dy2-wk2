const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});
themeCheck();

const notificationArray = [
    {
        image: "./images/avatar-mark-webber.webp",
        name: "Mark Webber",
        reaction: "reacted to your recent post",
        message: "My first tournament today!",
        boldtext: "",
        comment: "",
        time: "1m ago",
        image_2: "",
        comment: "",
        unread: true,
    },
    {
        image: "./images/avatar-angela-gray.webp",
        name: "Angela Gray",
        reaction: "followed you",
        message: "",
        boldtext: "",
        comment: "",
        time: "5m ago",
        image_2: "",
        comment: "",
        unread: true,
    },
    {
        image: "./images/avatar-jacob-thompson.webp",
        name: "Jacob Thompson",
        reaction: "has joined your group",
        message: "",
        boldtext: "Chess Club",
        comment: "",
        time: "1 day ago",
        image_2: "",
        comment: "",
        unread: true,
    },
    {
        image: "./images/avatar-rizky-hasanuddin.webp",
        name: "Rizky Hasanuddin",
        reaction: "sent you a private message",
        message: "",
        boldtext: "",
        comment: "",
        time: "5 days ago",
        image_2: "",
        comment:
            "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        unread: true,
    },
    {
        image: "./images/avatar-kimberly-smith.webp",
        name: "Kimberly Smith",
        reaction: "commented on your picture",
        message: "",
        boldtext: "",
        comment: "",
        time: "5 days ago",
        image_2: "",
        comment: "",
        unread: true,
    },
    {
        image: "./images/avatar-nathan-peterson.webp",
        name: "Nathan Peterson",
        reaction: "reacted to your recent post",
        message: "5 end-game strategies to increase your win rate",
        boldtext: "",
        comment: "",
        time: "2 weeks ago",
        image_2: "",
        comment: "",
        unread: true,
    },
    {
        image: "./images/avatar-anna-kim.webp",
        name: "Anna Kim",
        reaction: "left the group",
        message: "",
        boldtext: "Chess Club",
        comment: "",
        time: "2 weeks ago",
        image_2: "",
        comment: "",
        unread: true,
    },
];

document.addEventListener("DOMContentLoaded", function () {
    const notificationBar = document.getElementById("notification-bar");
    const markReadButton = document.getElementById("markread");
    const notificationCountBadge = document.getElementById("notification");

    let initialNotificationCount = notificationArray.filter(notification => notification.unread).length;
    notificationCountBadge.innerHTML = initialNotificationCount;

    notificationArray.forEach((value, index) => {
        const notificationElement = document.createElement("div");
        notificationElement.className = "notification-bar rounded-2xl bg-slate-200 mt-5 p-2";

        notificationElement.innerHTML = `
            <div class="flex flex-row">
                <img src="${value.image}" alt="avatar" class="h-[100%]">
                <div class="ml-3">
                    <span class="text-lg font-bold">${value.name}</span>
                    <span class="text-[#59606D]">${value.reaction}</span>
                    <span class="text-[#5E6778] font-bold">${value.boldtext}</span>
                    <p class="text-[#969CA7] mt-1">${value.time}</p>
                </div>
            </div>
        `;

        if (value.comment) {
            const commentSection = document.createElement("div");
            commentSection.className = "rounded-md border-2";
            commentSection.innerHTML = `<p class="text-[#5C606B] text-left p-3">${value.comment}</p>`;
            notificationElement.appendChild(commentSection);
        }

        notificationElement.addEventListener("click", function () {
            if (notificationArray[index].unread) {

                notificationArray[index].unread = false;

                initialNotificationCount--;
                notificationCountBadge.innerHTML = Math.max(0, initialNotificationCount);

                notificationElement.classList.remove("bg-slate-200");
            }
        });

        notificationBar.appendChild(notificationElement);
    });

    markReadButton.addEventListener("click", function (e) {
        e.preventDefault();

        notificationArray.forEach(notification => {
            notification.unread = false;
        });

        initialNotificationCount = 0;
        notificationCountBadge.innerHTML = "0";

        const elements = document.getElementsByClassName("notification-bar");
        Array.from(elements).forEach((element) => {
            element.classList.remove("bg-slate-200");
        });
    });
});

gsap.from(".animation", {
    // scale: -1,
    x: -1200,
    delay: 1,
    duration: 2,
})


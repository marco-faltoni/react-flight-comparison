export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1.1,
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.75,
            },
        }
    }
}

export const slideDown = {
    hidden: {
        opacity: 0,
        y: -300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

export const slideUp = {
    hidden: {
        opacity: 0,
        scale:0.5,
        y: 1000,
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}
import { useRouter } from 'expo-router';

function navigateToNextRegistrationPage(): void {
    const router = useRouter();
    router.navigate("/registration_2")
}

function navigateToPasswordForgotten2(): void {
    const router = useRouter();
    router.navigate("/passwordForgotten_2")
}

export default {
    navigateToNextRegistrationPage,
    navigateToPasswordForgotten2
}
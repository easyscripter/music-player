import { StyledLoginPage } from "../styles/components/StyledLoginPage";
import { VKAuthButton } from '../styles/components/VKAuthButton';

const LogInPage = () => {

    const logInVK = () => {
        console.log('test');
    }
    return (
        <StyledLoginPage.Wrapper>
            <StyledLoginPage.Form>
                <VKAuthButton.Container onClick={logInVK}>
                    <VKAuthButton.Text>
                       Войти через VK
                    </VKAuthButton.Text>
                </VKAuthButton.Container>
            </StyledLoginPage.Form>
        </StyledLoginPage.Wrapper>
    )
}

export default LogInPage;
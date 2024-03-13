import { API } from "../../shared";

interface FetchSignUp {
	accountId: string;
	password: string;
	nickname: string;
}

export async function fetchSignUp({
	accountId,
	password,
	nickname,
}: FetchSignUp) {
	return API.post("user", { accountId, password, nickname })
		.then(() => {
			return true;
		})
		.catch((reject) => {
			console.log(reject);
			throw new Error("회원가입 실패");
		});
}
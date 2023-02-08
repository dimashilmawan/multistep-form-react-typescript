import FormWrapper from "./FormWrapper";
import Input from "./ui/Input";
type AccountData = {
	email: string;
	password: string;
};

type AccountFormProps = AccountData & {
	updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
	return (
		<FormWrapper title="Account Creation">
			<Input
				label="Email"
				type="email"
				autoFocus
				value={email}
				onChange={e => updateFields({ email: e.target.value })}
			/>
			<Input
				label="Password"
				type="password"
				value={password}
				onChange={e => updateFields({ password: e.target.value })}
			/>
		</FormWrapper>
	);
};
export default AccountForm;

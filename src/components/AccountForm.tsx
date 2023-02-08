import FormWrapper from "./FormWrapper";
type AccountData = {
	email: string;
	password: string;
};

type AccountFormProps = AccountData & {
	updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
	return (
		<FormWrapper title="Account Detail">
			<label>First Name</label>
			<input
				autoFocus
				required
				value={email}
				onChange={e => updateFields({ email: e.target.value })}
			/>
			<label>Last Name</label>
			<input
				required
				value={password}
				onChange={e => updateFields({ password: e.target.value })}
			/>
		</FormWrapper>
	);
};
export default AccountForm;

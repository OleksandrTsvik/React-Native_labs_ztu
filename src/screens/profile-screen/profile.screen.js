import { Pressable, View, Text } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { styles } from "./profile.styles";
import { schema } from "./shema.form";
import TextInputController from "../../components/text-input-controller";
import LayoutScreen from "../../layout/layout.screen";

export default function ProfileScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      lastName: "",
      firstName: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LayoutScreen>
      <Text style={styles.title}>Реєстрація</Text>

      <View style={styles.formContainer}>
        <TextInputController
          control={control}
          name="email"
          label="Електронна пошта"
          errorMessage={errors.email?.message}
        />

        <TextInputController
          secureTextEntry
          control={control}
          name="password"
          label="Пароль"
          errorMessage={errors.password?.message}
        />

        <TextInputController
          secureTextEntry
          control={control}
          name="confirmPassword"
          label="Пароль (ще раз)"
          errorMessage={errors.confirmPassword?.message}
        />

        <TextInputController
          control={control}
          name="lastName"
          label="Прізвище"
          errorMessage={errors.lastName?.message}
          contentContainerStyle={{ marginTop: 12 }}
        />

        <TextInputController
          control={control}
          name="firstName"
          label="Ім’я"
          errorMessage={errors.firstName?.message}
        />

        <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>Зареєструватися</Text>
        </Pressable>
      </View>
    </LayoutScreen>
  );
}

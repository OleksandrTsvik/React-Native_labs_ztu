import { Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";

import { styles } from "./text-input-controller.styles";

export default function TextInputController({
  control,
  name,
  rules,
  label,
  errorMessage,
  contentContainerStyle,
  ...textInputProps
}) {
  return (
    <View style={contentContainerStyle}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
              {...textInputProps}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              style={[
                styles.textInput,
                { borderColor: errorMessage ? "#dc4446" : "#f0f0f0" },
              ]}
            />
            {errorMessage && (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            )}
          </>
        )}
      />
    </View>
  );
}


# Navegação com [React Navigation](https://reactnavigation.org/docs/getting-started/)


Alguns tipos de navegação:

1. Stack
2. Tab (aba)
3. Drawer (menu lateral)
4. Deep Link

Obs.: Para cada tipo de navegação é preciso instalar um pacote específico.

## [Instalação](https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project):

Segundo a documentação, instalar os pacotes:

- `@react-navigation/native`
- `react-native-screens`
- `react-native-safe-area-context`

No Android, adicionar em `android/app/src/main/java/entretelas/MainActivity.java`, o código abaixo:

```java
public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}
```
e o no topo:

```java
import android.os.Bundle;
```
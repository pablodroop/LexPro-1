module.exports = {
  env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true, // Suporte para testes com Jest
      es6: true,
  },
  extends: [
      'eslint:recommended',                   // Regras recomendadas do ESLint
      'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
      'plugin:prettier/recommended',           // Integra o Prettier com o ESLint
      'plugin:import/errors',                  // Regras de importação
      'plugin:import/warnings',
      'plugin:react/recommended',              // Regras recomendadas para React
      'plugin:react-hooks/recommended',        // Regras recomendadas para hooks do React
      'plugin:node/recommended',               // Regras recomendadas para Node.js
      'plugin:promise/recommended',            // Regras recomendadas para Promises
  ],
  parser: '@typescript-eslint/parser',        // Define o parser para TypeScript
  parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true, // Habilita a sintaxe JSX para projetos React
      },
  },
  plugins: [
      'prettier',
      'import',
      '@typescript-eslint',
      'react',
      'react-hooks',
      'node',
      'promise',
  ],
  settings: {
      react: {
          version: 'detect', // Detecta automaticamente a versão do React
      },
  },
  rules: {
      // Prettier
      'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5', arrowParens: 'always' }],
      
      // ESLint
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Permite console.warn e console.error
      'no-debugger': 'warn',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': 'off', // Desativa a regra no ESLint, será tratada pelo @typescript-eslint
      'no-magic-numbers': ['warn', { ignore: [0, 1, -1] }],
      
      // Import
      'import/order': ['error', {
          'groups': ['builtin', 'external', 'internal'],
          'pathGroups': [
              {
                  pattern: '**/*.css',
                  group: 'index',
                  position: 'after',
              },
          ],
          'newlines-between': 'always',
      }],
      'import/first': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-duplicates': 'error',
      
      // @typescript-eslint
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Recomendado desativar se você usar inferência de tipos
      '@typescript-eslint/ban-ts-comment': 'warn', // Avisar sobre o uso de comentários //@ts-ignore e similares
      
      // React
      'react/react-in-jsx-scope': 'off', // Não é necessário importar React no escopo com React 17+
      'react/prop-types': 'off', // Desativa a verificação de prop-types se usar TypeScript
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }], // Permite JSX em arquivos .jsx e .tsx
      
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // Node
      'node/no-unpublished-import': 'off', // Desativa a restrição de módulos não publicados para evitar problemas em projetos monorepo
      'node/no-missing-import': 'error', // Garante que as importações não estejam faltando
      
      // Promise
      'promise/always-return': 'warn', // Avisar se uma promessa não tiver um retorno
      'promise/catch-or-return': 'warn', // Avisar se uma promessa não tiver um catch
      'promise/no-nesting': 'warn', // Avisar sobre promessas aninhadas
  },
};
import { completeFromList } from "@codemirror/autocomplete";

// SQLite 키워드 목록
const sqliteKeywords = [
  "SELECT", "FROM", "WHERE", "INSERT", "UPDATE", "DELETE", "CREATE", "ALTER", "DROP", "TABLE", "INDEX",
  "VIEW", "TRIGGER", "TEMP", "INTO", "VALUES", "SET", "NULL", "NOT", "PRIMARY", "KEY", "FOREIGN", "REFERENCES",
  "INNER", "LEFT", "RIGHT", "JOIN", "ON", "GROUP", "BY", "ORDER", "LIMIT", "OFFSET", "HAVING", "DISTINCT",
  "UNION", "ALL", "AS", "CASE", "WHEN", "THEN", "ELSE", "END", "AND", "OR", "LIKE", "IN", "IS", "BETWEEN",
  "EXISTS", "COUNT", "SHOW", "REAL", "TEXT", "AUTOINCREMENT", "FLOAT",
].map(keyword => ({ label: keyword, type: "keyword" }));

// 자동완성 확장 생성 함수
export const sqliteCompletion = completeFromList(sqliteKeywords);

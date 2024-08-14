import { completeFromList } from "@codemirror/autocomplete";

// SQLite 키워드 목록, 자주 사용하는 순서로 정렬
const sqliteKeywords = [
  "SELECT", "INSERT", "UPDATE", "DELETE", "FROM", "WHERE", "CREATE", "ALTER", "DROP", "TABLE", "INDEX",
  "VIEW", "TRIGGER", "INNER", "LEFT", "RIGHT", "JOIN", "ON", "GROUP", "BY", "ORDER", "LIMIT", "OFFSET",
  "HAVING", "DISTINCT", "UNION", "ALL", "AS", "CASE", "WHEN", "THEN", "ELSE", "END", "AND", "OR", "LIKE",
  "IN", "IS", "BETWEEN", "EXISTS", "TEMP", "INTO", "VALUES", "SET", "NULL", "NOT", "PRIMARY", "KEY", "FOREIGN",
  "REFERENCES", "ABORT", "ACTION", "ADD", "AFTER", "ANALYZE", "ASC", "ATTACH", "AUTOINCREMENT", "BEFORE",
  "BEGIN", "BY", "CASCADE", "CHECK", "COLLATE", "COLUMN", "COMMIT", "CONFLICT", "CONSTRAINT", "CROSS",
  "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "DATABASE", "DEFAULT", "DEFERRABLE", "DEFERRED",
  "DESC", "DETACH", "EACH", "EXCEPT", "EXCLUSIVE", "EXPLAIN", "FAIL", "FILTER", "FIRST", "FOLLOWING", "FULL",
  "GENERATED", "GLOB", "GROUPS", "IF", "IGNORE", "IMMEDIATE", "INITIALLY", "INTERSECT", "ISNULL",
  "KEY", "LAST", "MATERIALIZED", "NATURAL", "NO", "NOTHING", "NOTNULL", "NULLS", "OF", "ONLY", "OTHERS",
  "OUTER", "OVER", "PARTITION", "PLAN", "PRAGMA", "PRECEDING", "QUERY", "RAISE", "RANGE", "RECURSIVE",
  "REGEXP", "REINDEX", "RELEASE", "RENAME", "REPLACE", "RESTRICT", "RETURNING", "ROLLBACK", "ROW",
  "ROWS", "SAVEPOINT", "TEMPORARY", "TIES", "TRANSACTION", "UNBOUNDED", "VACUUM", "WITHOUT",
  "Artist" // 테이블 이름 추가
].map(keyword => ({ label: keyword, type: "keyword", boost: 1 }));

// boost 값 추가하여 우선순위 조정
sqliteKeywords.forEach(keyword => {
  if (["SELECT", "INSERT", "UPDATE", "DELETE"].includes(keyword.label)) {
    keyword.boost = 2; // 높은 우선순위
  }
  if (keyword.label === "Artist") {
    keyword.boost = 1.5; // 테이블 이름에 대한 우선순위 설정
  }
});

// 자동완성 확장 생성 함수
export const sqliteCompletion = completeFromList(sqliteKeywords);

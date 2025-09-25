#!/usr/bin/env bash
# vi .git/hooks/pre-commit
# chmod +x .git/hooks/pre-commit
set -euo pipefail

FILE="index.html"

# YYYY-MM-DD-HH (năm-tháng-ngày-giờ hiện tại)
TS="$(date +'%Y-%m-%d %H:%M:%S')"

if [[ -f "$FILE" ]]; then
  # Chèn/ghi đè nội dung giữa <... id="updated_at" ...>...</...>
  perl -0777 -i -pe "s{(<[^>]*\\bid=[\"\\x27]updated_at[\"\\x27][^>]*>).*?(</[^>]*>)}{\$tsz ${TS}\$2}gms" "$FILE"

  # Đưa file đã sửa vào commit
  git add "$FILE"
else
  echo "pre-commit: Không thấy $FILE, bỏ qua cập nhật updated_at." >&2
fi

exit 0
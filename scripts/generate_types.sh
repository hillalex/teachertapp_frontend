#!/usr/bin/env bash
set -e

here=$(dirname "$0")

echo "Usage: ./generate-types.sh BRANCH_NAME"
target="types/generated.d.ts"
tmp_dir="/tmp/teachertapp"
if [[ $# -ne 1 ]]; then
  echo "No branch provided. Defaulting to main"
  branch="main"
else
  branch=$1
fi

mkdir -p $tmp_dir
wget https://github.com/hillalex/teachertapp/archive/"${branch}".zip -P $tmp_dir
unzip /tmp/teachertapp/"${branch}".zip -d $tmp_dir

rm -f ${target}
mkdir $tmp_dir/types
ts-node "$here"/generateTypes "${branch}"

echo "/**
  * This file was automatically generated.
  * DO NOT MODIFY IT BY HAND.
  * Instead, modify the teachertapp JSON schema files
  * and run ./generate_types.sh to regenerate this file.
*/" >>${target}

cat $tmp_dir/types/*.d.ts >>${target}
rm -rf $tmp_dir

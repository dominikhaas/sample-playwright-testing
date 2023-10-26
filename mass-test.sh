for i in {1..100}; do
    npx playwright test --headed >> mass-test-output.txt
    echo "---- Ende des Durchlaufs $i ----" >> mass-test-output.txt
done
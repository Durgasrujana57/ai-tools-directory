const express = require('express');
const router = express.Router();
const { db } = require('../firebase');

// ✅ Dashboard - show all categories
router.get('/dashboard', async (req, res) => {
  try {
    const categoriesSnapshot = await db.collection('categories').get();
    const categories = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.render('dashboard', { categories });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// ✅ Show tools under selected category
router.get('/category/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {
    const categoryDoc = await db.collection('categories').doc(categoryId).get();
    if (!categoryDoc.exists) return res.status(404).send('Category not found');

    const toolsSnapshot = await db.collection('tools')
      .where('category', '==', categoryId)
      .get();

    const tools = toolsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const category = { id: categoryDoc.id, ...categoryDoc.data() };

    res.render('tools', { category, tools });
  } catch (err) {
    res.status(500).send('Error loading tools');
  }
});

// ✅ Tool detail view
router.get('/tools/:id', async (req, res) => {
  try {
    const doc = await db.collection('toolsDetails').doc(req.params.id).get();
    if (!doc.exists) return res.status(404).send('Tool not found');
    res.render('tool-details', { tool: doc.data() });
  } catch {
    res.status(500).send('Error loading tool');
  }
});

module.exports = router;

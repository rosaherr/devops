import test from "node:test";
import assert from "node:assert/strict";
import {
  adminWorkflows,
  milestones,
  onboardingSteps,
  quickStats,
  resources,
} from "../app/data/courseContent.js";

test("includes al menos tres hitos", () => {
  assert.ok(milestones.length >= 3);
});

test("el flujo de onboarding inicia con la creación de usuario", () => {
  assert.match(onboardingSteps[0], /Crear un usuario/);
});

test("cada workflow administrativo tiene detalle", () => {
  for (const workflow of adminWorkflows) {
    assert.ok(workflow.action);
    assert.ok(workflow.detail.length > 40);
  }
});

test("las estadísticas rápidas tienen etiqueta y valor", () => {
  for (const stat of quickStats) {
    assert.ok(stat.label);
    assert.ok(stat.value);
  }
});

test("todos los recursos apuntan a https", () => {
  for (const resource of resources) {
    assert.match(resource.url, /^https:\/\//);
  }
});
